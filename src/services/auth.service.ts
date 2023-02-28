import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LOGIN_URL } from './endpoint';
import { AuthResponse } from 'src/types/response/auth';

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
    return this.http.post<AuthResponse>(LOGIN_URL, payload, options);
  }

  saveToken(token: string) {
    localStorage.setItem('shopee-token', token);
  }

  getToken() {
    return localStorage.getItem('shopee-token');
  }

  deleteToken() {
    localStorage.removeItem('shopee-token');
  }
}
