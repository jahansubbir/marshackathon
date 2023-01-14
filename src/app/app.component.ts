import { DatePipe } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges {
   userName!:string;
  ngOnInit(): void {
    
      var usrName=localStorage.getItem("userName");
    if (usrName!=undefined){
      this.userName=usrName; 
       }

    this.currentTime=new Date();
    if(this.currentTime.getHours()<12){
      this.welcomeMessage="Good Morning";
    }else if (this.currentTime.getHours()<18){
      this.welcomeMessage="Good Afternoon";
    }else{
      this.welcomeMessage="Good Evening";
    }
    if(this.userName!=null){
    this.welcomeMessage+=" "+"Alice" +"!";
  }
}

  /**
   *
   */
  constructor(private datePipe:DatePipe) {
    
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    var usrName=localStorage.getItem("userName");
    if (usrName!=undefined){
      this.userName=usrName; 
       }

    this.welcomeMessage+=" "+this.userName +"!";
  }
  title = 'Drishya';
  currentTime!:Date;
  welcomeMessage!:string;
}
