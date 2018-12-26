import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputstokRoutingModule } from './inputstok-routing.module';
import { InputstokComponent } from './inputstok/inputstok.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    InputstokRoutingModule,
    LayoutModule
  ],
  declarations: [InputstokComponent]
})
export class InputstokModule { }
