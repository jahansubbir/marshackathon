import { Component, Input, OnInit } from '@angular/core';
import { Shipment } from '../models/shipment';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() shipments!:Shipment[];

}
