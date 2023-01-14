import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material/material.module';
import { MdBootstrapModule } from './md-bootstrap/md-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import {MatCardModule} from '@angular/material/card';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ContainerComponent } from './container/container.component';
import { ContainerInfoService } from './container-info.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './error-page/not-found/not-found.component';

import { OceanModule } from './ocean/ocean.module';
import { LoginComponent } from './auth/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './guards/auth-guard.service';
import { SummaryComponent } from './summary/summary.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { DatePipe } from '@angular/common';
import { ShipmentInfoService } from './shipment-info.service';
import { OverviewComponent } from './overview/overview.component';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { BookingComponent } from './booking/booking.component';
import { CustomsComponent } from './customs/customs.component';
import { TransportComponent } from './transport/transport.component';


export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    LoginComponent,
    SummaryComponent,
    BookingDetailsComponent,
    OverviewComponent,
    BookingComponent,
    CustomsComponent,
    TransportComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MdBootstrapModule,
    BrowserAnimationsModule,
    
    FormsModule,
    HttpClientModule,
    
    MatCardModule,
    MatSelectModule,
    MatTabsModule,


    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    OceanModule,
    
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:5001"],
        disallowedRoutes:[]
      }
    })
    
  ],
  providers: [AuthGuardService, DatePipe,ShipmentInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
