import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaporanRoutingModule } from './laporan-routing.module';
import { LaporanComponent } from './laporan/laporan.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LaporanRoutingModule,
    LayoutModule
  ],
  declarations: [LaporanComponent]
})
export class LaporanModule { }
