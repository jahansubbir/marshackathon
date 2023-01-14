import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ContainerComponent } from './container/container.component';
import { NotFoundComponent } from './error-page/not-found/not-found.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'container', component: ContainerComponent, canActivate: [AuthGuardService] },
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuardService] },
  { path: 'summary', component: SummaryComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'sea', loadChildren: () => import('./ocean/ocean.module').then(m => m.OceanModule) },
  { path: 'booking-details', component: BookingDetailsComponent, canActivate: [AuthGuardService] },

  { path: '**', redirectTo: '/404', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
