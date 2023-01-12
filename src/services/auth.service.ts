import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LOGIN } from 'src/api/endpoint';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  // Observable biến hứng

  login(payload: any): Observable<any> {
    const options = {
      headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*'),
    };

    return this.http.post<any>(LOGIN, payload, options);
  }

  saveToken(token: string) {
    sessionStorage.setItem('shopee-token', token);
  }

  getToken(token: string) {
    sessionStorage.getItem('shopee-token');
  }
}
