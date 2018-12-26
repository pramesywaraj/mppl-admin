import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import { InputstokComponent } from './inputstok/inputstok/inputstok.component';
import { DatastokComponent } from './datastok/datastok/datastok.component';
import { OrderComponent } from './order/order/order.component';
import { LaporanComponent } from './laporan/laporan/laporan.component';
import { OrderModule } from './order/order.module';
import { InputstokModule } from './inputstok/inputstok.module';
import { DatastokModule } from './datastok/datastok.module';
import { LaporanModule } from './laporan/laporan.module';

@NgModule({
  declarations: [
    AppComponent,
    // InputstokComponent,
    // DatastokComponent,
    // OrderComponent,
    // LaporanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    OrderModule,
    InputstokModule,
    DatastokModule,
    LaporanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
