import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-datastok',
  templateUrl: './datastok.component.html',
  styleUrls: ['./datastok.component.scss']
})
export class DatastokComponent implements OnInit {

  public bukus: any;

  constructor(private auth: AuthService, private router:Router, private book: BookService) { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    if(!this.auth.checkLogin()) {
      this.router.navigate(['login']);
    }
    this.getBook();
  }

  getBook() {
    this.book.getBook().then(res => {
      this.bukus = res;
      console.log('data in dashboard', this.bukus);
    }, err => {
      console.log('error', err);
    });
  }

  goToInputBook() {
    this.router.navigate(['inputstok']);
  }

  
}
