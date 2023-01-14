import { Component, OnInit } from '@angular/core';
import { combineLatest, combineLatestAll, map } from 'rxjs';
import { ContainerInfoService } from '../container-info.service';
import { LdbRoot } from '../models/LdbRoot';
import { OceanRoot } from '../models/OceanRoot';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private containerInfoService:ContainerInfoService) { }
  containerNo:string="";
  ldbRoot?:LdbRoot;
  oceanRoot?:OceanRoot;
  ngOnInit(): void {
  }

  search(containNo:string){
    combineLatest({
    oceanRoot:this.containerInfoService.getMLData(containNo),
    ldbRoot:this.containerInfoService.getLdbData(containNo)
    }).
    subscribe((data:any)=>{
      this.oceanRoot=data.oceanRoot;
      this.ldbRoot=data.ldbRoot;
      //alert(this.ldbRoot?.object.containerFormList[0].cntrSize);
    })
    
    // this.containerInfoService.getMLData(containNo)
    // .subscribe((data:OceanRoot)=>this.oceanRoot=data);
  }

}
