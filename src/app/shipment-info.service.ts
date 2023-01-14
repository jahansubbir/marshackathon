import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipment } from './models/shipment';

@Injectable({
  providedIn: 'root'
})
export class ShipmentInfoService implements OnInit {

  url!:string;
  constructor(private client:HttpClient) {
    this.url='/assets/data/shipment.json';
   }
  ngOnInit(): void {
   
  
  }
public getShipments(customerId:string):Observable<Shipment[]>{
   return this.client.get<Shipment[]>(this.url);
  }
  public getAllShipment():Observable<Shipment[]>{
    return this.client.get<Shipment[]>(this.url);
   }

  
}
