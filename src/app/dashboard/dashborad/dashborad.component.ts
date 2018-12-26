import { AuthService } from './../../services/auth.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit, OnDestroy {

  public data: any;

  constructor(private auth: AuthService, private router:Router, private book: BookService) {

   }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    if(!this.auth.checkLogin()) {
      this.router.navigate(['login']);
    }
    this.getBook();
  }

  ngOnDestroy(): void {
      document.body.className = '';
  }

  getBook() {
    this.book.getBook().then(res => {
      this.data = res;
      console.log('data in dashboard', this.data);
    }, err => {
      console.log('error', err);
    });
  }

  

}
