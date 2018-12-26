import { AuthService } from './../../services/auth.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit, OnDestroy {

  constructor(private auth: AuthService, private router:Router) {
   }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    if(!this.auth.checkLogin()) {
      this.router.navigate(['login']);
    }
  }

  ngOnDestroy(): void {
      document.body.className = '';
  }

}
