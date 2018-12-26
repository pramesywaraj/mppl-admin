import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.scss']
})
export class AsidenavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  dashboard(){
    this.router.navigate(['Dashboard']);
  }

  order(){
    this.router.navigate(['Order']);
  }

  laporan(){
    this.router.navigate(['laporan']);
  }

  inputstok(){
    this.router.navigate(['inputstok']);
  }

  datastok(){
    this.router.navigate(['datastok']);
  }

}
