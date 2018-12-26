import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order/order.component';
import { LaporanComponent } from './laporan/laporan/laporan.component';
import { InputstokComponent } from './inputstok/inputstok/inputstok.component';
import { DatastokComponent } from './datastok/datastok/datastok.component';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'order', component: OrderComponent},
    {path: 'laporan', component: LaporanComponent},
    {path: 'inputstok', component: InputstokComponent},
    {path: 'datastok', component: DatastokComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
