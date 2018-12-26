import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaporanComponent } from './laporan/laporan.component';

const routes: Routes = [
  {path: 'laporan', component: LaporanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaporanRoutingModule { }
