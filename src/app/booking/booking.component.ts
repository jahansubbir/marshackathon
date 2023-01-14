import { DatePipe } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ContainerInfoService } from '../container-info.service';
import { Container } from '../models/container';
import { ContainerMove } from '../models/container-move';
import { Shipment } from '../models/shipment';
import { ShipmentInfoService } from '../shipment-info.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit,OnChanges,DoCheck {

  @Input() week!: string;
  bookingCount!: number;
  containerCount!: number;
  shipments: Shipment[] = [];
  activeBookings: Shipment[]=[];
  weeksActiveBooking: Shipment[]=[];
  containers: ContainerMove[]=[];
  bookedContainers: ContainerMove[]=[];
  weeksBookedContainer: ContainerMove[]=[];
  bookingImgPath!: string;
  containerImgPath!: string;

  constructor(
    private shipmnetInfoService: ShipmentInfoService,
    private containerInfoService: ContainerInfoService,
    private datePipe:DatePipe,
    private router:Router
  ) { }
  ngDoCheck(): void {
    //throw new Error('Method not implemented.');
  }
  

  ngOnInit(): void {

    this.getBookings();
    this.getContainers();
    this.bookingImgPath = '../assets/images/booking.png';
    this.containerImgPath = '../assets/images/container.png';
  }

  ngOnChanges(changes: SimpleChanges): void {
   var weekNo=changes['week'].currentValue;
   if(weekNo!=undefined && this.shipments.length>0)
   {
     this.getWeeksBookingAndContainer(weekNo);}
  }

  getBookings() {
    this.shipmnetInfoService.getAllShipment().subscribe(
      data => {
        this.shipments = data;
        this.getActiveBooking(this.shipments);

      }
    )
  }
  private getActiveBooking(shipments: Shipment[]): void {
    this.activeBookings = this.shipments.filter(a => a.shipment_status.toLowerCase() == "active");
    this.bookingCount = this.activeBookings.length;

  }
  private getContainers() {
    this.containerInfoService.getContainerMovementData().subscribe(data => {
      this.containers = data;
      this.getBookedContainer(this.containers, this.activeBookings);
    });
  }
  getBookedContainer(containers: ContainerMove[], shipments: Shipment[]) {
    var bookingNos = shipments.map(a => a.booking_number);
    this.bookedContainers = containers.filter(a => bookingNos.includes(a.booking_number));
    this.containerCount = this.bookedContainers.length;
  }
  getWeeksBookingAndContainer(weekNo: string) {
if(this.bookedContainers.length)
    this.weeksBookedContainer = this.bookedContainers.filter(a => a.activity_week === this.week);
    var bookingNos = this.weeksBookedContainer.map(a => a.booking_number);
    this.weeksActiveBooking=this.shipments.filter(a=>this.datePipe.transform(a.transport_start_date,'w')==weekNo.substring(4,6));
    this.bookingCount=this.weeksActiveBooking.length;
    this.containerCount=this.weeksBookedContainer.length;
  }
  BookingDetails() {
    this.router.navigate(['/booking-details']);

  }
  details:boolean=false;;
  getDetails(){
    this.details=true;
  }
}
