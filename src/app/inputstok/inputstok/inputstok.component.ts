import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputstok',
  templateUrl: './inputstok.component.html',
  styleUrls: ['./inputstok.component.scss']
})
export class InputstokComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    if(!this.auth.checkLogin()) {
      this.router.navigate(['login']);
    }
  }

}
