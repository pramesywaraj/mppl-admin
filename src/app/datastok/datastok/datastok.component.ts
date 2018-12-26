import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datastok',
  templateUrl: './datastok.component.html',
  styleUrls: ['./datastok.component.scss']
})
export class DatastokComponent implements OnInit {

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    if(!this.auth.checkLogin()) {
      this.router.navigate(['login']);
    }
  }

  
}
