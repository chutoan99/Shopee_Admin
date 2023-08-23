import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthResponse, ShopsResponse } from './index.response';
import { URL_LOGIN, URL_SHOP } from '../endpoint';

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

  GetShops(query: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.getHeader(),
      }),
      params: new HttpParams().set('page', query.page).set('limit', query.limit),
    };
    return this.http.get<any>(`${environment.BASE_URL}/${URL_SHOP}`, httpOptions).pipe(
      map((res: any) => {
        return res.response.rows;
      })
    );
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
