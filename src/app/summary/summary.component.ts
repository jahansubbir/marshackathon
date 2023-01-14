import { Component, DoCheck, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Shipment } from '../models/shipment';
import { ShipmentInfoService } from '../shipment-info.service';
import { Observable } from 'rxjs';
import { ContainerInfoService } from '../container-info.service';
import { Container } from '../models/container';
import { UtilityService } from '../utility.service';
import { Week } from '../models/week';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit,DoCheck {

  totalBookingCount!: number;
  utilizedBookingCount!: number;
  weeksReceivedShipment: Shipment[] = [];
  containers: Container[] = [];
  importsOfTheWeek!: Observable<Shipment[]>;
  countOfWeeksReceivedShipment!: number;
  weeks!:Week[];
  constructor(private router: Router,
    private shipmentInfoService: ShipmentInfoService,
    private containerInfoService: ContainerInfoService,
    private utilityService:UtilityService) { }
  ngDoCheck(): void {
    if(this.containers.length==0){
      this.getContainerInfo();
    }
  }

  ngOnInit(): void {
    this.totalBookingCount = 12200;
    this.utilizedBookingCount = 11956;
    this.getNextWeeksShipment();
    this.getContainerInfo();
    this.getWeeks();
  }


  getNextWeeksShipment() {
    this.shipmentInfoService.getShipments("331S1678981").subscribe(observer => {
      var today = new Date();
      var weekEnd = new Date();
      weekEnd.setDate(today.getDate() + 7);
      this.weeksReceivedShipment = observer.filter(a => new Date(a.destination_arrival_date) > today &&
        new Date(a.destination_arrival_date) < weekEnd
      );
      if (this.weeksReceivedShipment.length > 0) {
        this.countOfWeeksReceivedShipment = this.weeksReceivedShipment.length;
      }

    })

  }
  BookingDetails() {
    this.router.navigate(['/booking-details']);

  }
  getContainerInfo() {
    this.containerInfoService.getContainerData().subscribe((data: Container[]) => {
      this.containers = data;
    }
    )
  }
  getWeeksContainer(){
    //this.containers.filter(a=>a.)
  }
  selectedWeek!:string;
  getWeeks(){
    this.utilityService.getWeeks().subscribe(data=>
      this.weeks=data
      );
  }

}
