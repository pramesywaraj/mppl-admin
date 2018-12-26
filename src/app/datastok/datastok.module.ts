import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatastokRoutingModule } from './datastok-routing.module';
import { DatastokComponent } from './datastok/datastok.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    DatastokRoutingModule,
    LayoutModule
  ],
  declarations: [DatastokComponent]
})
export class DatastokModule { }
