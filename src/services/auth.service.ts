import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_LOGIN } from './endpoint';
import { AuthResponse } from 'src/types/response/auth.response';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogout$ = new BehaviorSubject<Boolean>(false);

  login(payload: any): Observable<any> {
    const options = {
      headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*'),
    };
    return this.http.post<AuthResponse>(`${environment.BASE_URL}/${URL_LOGIN}`, payload, options);
  }

  getHeader() {
    return 'Bearer ' + localStorage.getItem('shopee-token');
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
  logout() {
    localStorage.removeItem('shopee-token');
    this.isLogout$.next(true);
    this.router.navigate(['/login']);
  }
  constructor(private http: HttpClient, private router: Router) {}
}
