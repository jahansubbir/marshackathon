import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../guards/auth-guard.service';
import { SeaComponent } from './sea/sea.component';

const routes: Routes = [
  {path:'sea',component:SeaComponent,canActivate:[AuthGuardService]},
  {path:'',pathMatch:'full',component:SeaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OceanRoutingModule { }
