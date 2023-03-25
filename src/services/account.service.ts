import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_INFO_ACCOUNT } from './endpoint';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { AccountResponse } from 'src/types/response/account.response';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAccount() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getHeader(),
      }),
    };
    return this.http.get<AccountResponse>(`${environment.BASE_URL}/${URL_INFO_ACCOUNT}`, httpOptions);
  }
  UpdateAccount() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getHeader(),
      }),
    };
    const payload = {
      email: '',
      sex: 0,
      name: '',
      address: '',
      birthday: '',
      phone: 0,
    };
    return this.http.put<any>(`${environment.BASE_URL}/${URL_INFO_ACCOUNT}`, payload, httpOptions);
  }
}
