import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ContainerInfoService } from '../container-info.service';
import { ContainerMove } from '../models/container-move';
import { Shipment } from '../models/shipment';
import { ShipmentInfoService } from '../shipment-info.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit, OnChanges {
  bookingImgPath!: string;
  containerImgPath!: string;
  shipments: Shipment[] = [];
  containerMoves: ContainerMove[] = [];
  yetToStart:ContainerMove[]=[];
  inTransit:ContainerMove[]=[];
  towardsFactory:ContainerMove[]=[];
  towardsTerminal:ContainerMove[]=[];
  @Input() week!: string;

  constructor(
    private shipmnetInfoService: ShipmentInfoService,
    private containerInfoService: ContainerInfoService,
    private datePipe: DatePipe,
    private router: Router
  ) { }


  ngOnChanges(changes: SimpleChanges): void {
    var weekNo = changes['week'].currentValue;
    if (weekNo != undefined) 
    { this.getWeeksContainerInfo(weekNo); }
  }
  getWeeksContainerInfo(weekNo: string) {
    var thisWeeksMovement=this.containerMoves.filter(a=>this.datePipe.transform(a.move_timestamp,'w')==weekNo.substring(4,6));
    this.yetToStart=thisWeeksMovement.filter(a=>a.activity)

  }
  ngOnInit(): void {

  //  this.getBookings();
  //  this.getContainers();
    this.bookingImgPath = '../assets/images/booking.png';
    this.containerImgPath = '../assets/images/container.png';
  }
  getContainers() {
    this.containerInfoService.getContainerMovementData().subscribe(data => this.containerMoves = data);
  }
  getBookings() {
    this.shipmnetInfoService.getAllShipment().subscribe(
      data => {
        this.shipments = data;
        //this.getActiveBooking(this.shipments);

      }
    )
  }
}
