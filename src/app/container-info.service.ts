import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LdbRoot } from './models/LdbRoot';
import { OceanRoot } from './models/OceanRoot';
import { Container } from './models/container';
import { ContainerMove } from './models/container-move';
@Injectable({
  providedIn: 'root'
})
export class ContainerInfoService {

  constructor(private http: HttpClient) { }

  getLdbData(containerNo: string): Observable<LdbRoot> {
    var api = this.http.
      get<LdbRoot>(`https://localhost:44319/RailLag/${containerNo}`);


    return api;
  }
  getMLData(containerNo: string): Observable<OceanRoot> {
    var api = this.http.
      get<OceanRoot>(`https://localhost:44319/OceanLag/${containerNo}`);


    return api;
  }

  private containerUrl: string = '/assets/data/container.json';
  private containerMoveUrl: string = '/assets/data/container_move.json';;

  getContainerData(): Observable<Container[]> {
    return this.http.get<Container[]>(this.containerUrl);
  }
  getContainerMovementData(): Observable<ContainerMove[]> {
    return this.http.get<ContainerMove[]>(this.containerMoveUrl);
  }
}
