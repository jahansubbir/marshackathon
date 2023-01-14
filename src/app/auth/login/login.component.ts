import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationResponse } from 'src/app/models/authenticationResponse';
import { UserProfile } from 'src/app/models/userProfile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin!:boolean;
  credentials:UserProfile={
    userName:'',
    password:'',
    customerId:''
};

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
login=(form:NgForm)=>{
  console.log("trying to login");
  if(form.valid){    this.http.post<AuthenticationResponse>
    ("https://serverapp20230105112215.azurewebsites.net/auth/login",
    this.credentials,
    {headers:new HttpHeaders({"Content-Type":"application/json"})}).
    subscribe({
      next:(response:AuthenticationResponse)=>{
        const token=response.token;
        localStorage.setItem("jwt",token);
        localStorage.setItem("userName",this.credentials.userName)
        this.invalidLogin=false;
        this.router.navigate(["/summary"])
      },
      error:(err:HttpErrorResponse)=>{
        this.invalidLogin=true;
      }
    })
  }
}
signIn=(form:NgForm)=>{
  if  (form.valid){
    if(this.credentials.userName=='maersk001' &&
    this.credentials.password=="p@s5001"
    ){
      var token="abcd.bcde.efgh";
      //const token=token;//response.token;
      localStorage.setItem("jwt",token);
      localStorage.setItem("userName",this.credentials.userName)
      this.invalidLogin=false;
      this.router.navigate(["/summary"])
    }
  }
}
}
