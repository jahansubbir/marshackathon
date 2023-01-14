import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from 'src/app/models/userProfile';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http:HttpClient) { }

  public getUser=(uId:string,password:string)=>{
    //this.http.get<UserProfile[]>('/assets/users.json').
  }
}
