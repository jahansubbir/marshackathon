import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OceanRoot } from 'src/app/models/OceanRoot';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class OceanRepositoryService {

  constructor(
    private http:HttpClient,
    private envUrl:EnvironmentUrlService
  ) { }
  

public getOceanStatus=(route:string,containerNo:string)=>{
  return this.http.get<OceanRoot>(
    `https://api.maersk.com/track/${containerNo}?operator=MAEU`
    //this.createCompleteRoute(route,this.envUrl.urlAddress)
    
  );
}


  private createCompleteRoute=(route:string,envAddress:string)=>{
    return `${envAddress}/${route}`;
  }

  private generateHeaders=()=>{
    return {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      })
    }
  }
  //private oceanUrl:string=$"https://api.maersk.com/track/{containerNo}?operator=MAEU";
}
