import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputstokRoutingModule } from './inputstok-routing.module';
import { InputstokComponent } from './inputstok/inputstok.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InputstokRoutingModule,
    LayoutModule,
    FormsModule
  ],
  declarations: [InputstokComponent]
})
export class InputstokModule { }
