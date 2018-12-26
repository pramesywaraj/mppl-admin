import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(  
      private router: Router,
      private auth: AuthService
  ) { }

  @Input() loginProp:any = { 
    email: '', 
    password: '',
  };

  ngOnInit() {
    document.body.className = 'hold-transition login-page';
      $(() => {
          $('input').iCheck({
              checkboxClass: 'icheckbox_square-blue',
              radioClass: 'iradio_square-blue',
              increaseArea: '20%' /* optional */
          });
      });
  }

  login() {
    this.auth.login(this.loginProp).then(result => {
        this.router.navigate(['Dashboard']);
    }, err => {
        console.log(err);
    });
  }

}
