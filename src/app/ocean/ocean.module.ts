import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OceanRoutingModule } from './ocean-routing.module';
import { SeaComponent } from './sea/sea.component';


@NgModule({
  declarations: [
    SeaComponent
  ],
  imports: [
    CommonModule,
    OceanRoutingModule
  ]
})
export class OceanModule { }
