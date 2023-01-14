import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ContainerInfoService } from '../container-info.service';
import { ShipmentInfoService } from '../shipment-info.service';
import { ContainerMove } from '../models/container-move';
import { UtilityService } from '../utility.service';
import { Week } from '../models/week';
import { Shipment } from '../models/shipment';
import { DatePipe } from '@angular/common';
import { Container } from '../models/container';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnChanges, DoCheck {
  shipments: Shipment[]=[];

  containerMoves: ContainerMove[] = [];
  gateOutContainers: ContainerMove[] = [];
  countOfGateOutContainer!: number;
  weeks!: Week[];
  week!: string;
  selectedWeek!: string;
  weeksShipment: Shipment[] = [];
  weeksCompletedShipment: Shipment[] = [];
  weeksBookedContainers: ContainerMove[] = [];
  emptyContainerMove: ContainerMove[] = [];
  inTransitContainerMove: ContainerMove[] = [];
  haulageCOntainerMove: ContainerMove[] = [];
  containers: Container[] = [];
  inTransitContainer: Container[] = [];
  gateInContainerMove: ContainerMove[] = [];
  departedContainerMove: ContainerMove[] = [];
  arrivedContainerMove: ContainerMove[] = [];

  constructor(
    private shipmnetInfoService: ShipmentInfoService,
    private containerMovementInfoService: ContainerInfoService,
    private containerInfoService: ContainerInfoService,
    private utilityService: UtilityService,
    private datePipe: DatePipe) { }
  ngDoCheck(): void {
    if (this.selectedWeek != null) {
      if (this.shipments.length==0){
        this.getShipments();
      }
      if(this.containerMoves.length==0){
        this.getContainerMove();
      }
      if(this.containers.length==0){
        this.getContainers();
      }

      this.weeksShipment = this.shipments?.filter(a => this.datePipe.transform(a.origin_departure_date, 'w') === this.selectedWeek.substring(4, 6));
      //getBookedContainerOfTheWeek()
      this.getBookedContainerOfTheWeek();
      this.getTransportLifeCycles();
      this.getOceanMovements();


    }
  }
  ngOnChanges(changes: SimpleChanges): void {

    // this.getGateOutContainers();
    this.week = changes['selectedWeek'].currentValue;
    // if (changes['selectedWeek'].currentValue!=null){
    //   this.weeksShipment = this.shipments.filter(a => this.datePipe.transform(a.origin_departure_date, 'w') === this.selectedWeek.substring(4, 6));
    //   this.getBookedContainerOfTheWeek();
    //   this.getTransportLifeCycles();
    //   this.getOceanMovements();


    // }

  }


  ngOnInit(): void {
    this.getWeeks();
    this.getShipments();
    this.getContainerMove();
    //this.getShipments();
    this.getContainers();
    //this.selectedWeek = '202248';

    // this.getGateOutContainers();
  }

  getWeeks() {
    this.utilityService.getWeeks().subscribe(data =>
      this.weeks = data
    );
  }
  getContainerMove() {
    this.containerMovementInfoService.getContainerMovementData().subscribe(data => {
      this.containerMoves = data;
      this.getGateOutContainers();

    }
    );
  }
  getGateOutContainers() {
    //if ()
    this.gateOutContainers = this.containerMoves.filter(a => a.move.toUpperCase() === "GATE-OUT");
    // if (this.gateOutContainers.length > 0) {
    //   this.countOfGateOutContainer = this.gateOutContainers.length;
    // }
  }

  getContainers() {
    this.containerInfoService.getContainerData().subscribe(data =>
      this.containers = data);
  }
  getShipments() {
    //    if(this.selectedWeek!=null){
    this.shipmnetInfoService.getAllShipment().subscribe(
      data => {
        this.shipments = data;
        this.selectedWeek = '202248';
      });

    //  }
  }
  getBookedContainerOfTheWeek() {
    if (this.selectedWeek != null) {
      var bookingNos = this.weeksShipment.map(a => a.booking_number);
      this.weeksBookedContainers = this.containerMoves.filter(a => bookingNos.includes(a.booking_number))
    }
  }
  getTransportLifeCycles() {
    if (this.selectedWeek != null) {
      this.emptyContainerMove = this.containerMoves.
        filter(a => a.is_empty &&
          this.datePipe.transform(a.activity_timestamp, 'w') === this.selectedWeek.substring(4, 6)
        );
      this.inTransitContainerMove = this.containerMoves.filter(a => a.is_transhipment &&
        this.datePipe.transform(a.activity_timestamp, 'w') === this.selectedWeek.substring(4, 6));
      this.weeksCompletedShipment = this.shipments.filter(a =>
        //a.shipment_status.toLowerCase() === "completed" 
        //&&
        this.datePipe.transform(a.destination_arrival_date, 'w') === this.selectedWeek.substring(4, 6)
      );
    }
  }
  getOceanMovements() {
    if (this.selectedWeek != null) {
      this.gateInContainerMove = this.containerMoves.filter(
        a => this.datePipe.transform(a.activity_timestamp, 'w') === this.selectedWeek.substring(4, 6) &&
          a.move.toLowerCase() == 'gate-in'
      );

      this.departedContainerMove = this.containerMoves.filter(
        a => this.datePipe.transform(a.activity_timestamp, 'w') === this.selectedWeek.substring(4, 6) &&
          a.activity.toLowerCase() == 'load'
      );

      this.arrivedContainerMove = this.containerMoves.filter(
        a => this.datePipe.transform(a.activity_timestamp, 'w') === this.selectedWeek.substring(4, 6) &&
          a.activity.toLowerCase() == 'discharg'
      );
    }
  }
}
