import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputstokComponent } from './inputstok/inputstok.component';

const routes: Routes = [
  {path: 'inputstok', component: InputstokComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputstokRoutingModule { }
