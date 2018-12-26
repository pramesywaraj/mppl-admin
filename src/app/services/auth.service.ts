import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const apiUrl = 'http://bukuku.codepanda.id:3001';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  
  login(credentials) {
    return new Promise((resolve, reject) => {
        this.http.post(apiUrl+'/users/login', JSON.stringify(credentials), httpOptions)
          .subscribe(res => {

            if(1) {
              // localStorage.setItem('token', res.);
              resolve(res);
            }

           }, (err) => {
            reject(err);
          });
    });
  }
}
