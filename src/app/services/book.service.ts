import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const apiUrl = 'http://bukuku.codepanda.id:3001';
var token;
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token').toString()
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    token = localStorage.getItem('token');
  }

  getBook() {
    console.log('hay');
    return new Promise((resolve, reject) => {
        this.http.get(apiUrl+'/barangs', httpOptions)
          .subscribe(res => {
            let data = res['barangs'];
            resolve(data);
           }, (err) => {
            reject(err);
          });
    });
  }

  postBook(credentials) {
    console.log(credentials);
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl+'/barangs', credentials, httpOptions)
        .subscribe(res => {
          resolve(res);
          }, (err) => {
          reject(err);
        });
    });
  }
}
