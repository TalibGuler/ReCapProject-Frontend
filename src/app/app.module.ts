import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './companents/car/car.component';
import { ColorComponent } from './companents/color/color.component';
import { BrandComponent } from './companents/brand/brand.component';
import { CustomerComponent } from './companents/customer/customer.component';
import { NaviComponent } from './companents/navi/navi.component';
import { RentalComponent } from './companents/rental/rental.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    CustomerComponent,
    NaviComponent,
    RentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
