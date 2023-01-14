import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Week } from './models/week';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  dataUrl!:string;
  constructor(private client:HttpClient) {
    this.dataUrl='/assets/data/';
   }
   public getWeeks():Observable<Week[]>{
    return this.client.get<Week[]>(this.dataUrl+"weeks.json");
   }
 
}
