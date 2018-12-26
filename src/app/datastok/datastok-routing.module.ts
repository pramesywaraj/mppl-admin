import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatastokComponent } from './datastok/datastok.component';

const routes: Routes = [
  {path: 'datastok', component: DatastokComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatastokRoutingModule { }
