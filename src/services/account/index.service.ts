import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/index.service';
import { URL_INFO_ACCOUNT } from '../endpoint';
import { environment } from 'src/environments/environment';
import { AccountResponse } from './index.response';
import { ShopAccount } from 'src/types/account.model';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAccount(): Observable<ShopAccount> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getHeader(),
      }),
    };
    return this.http.get<AccountResponse>(`${environment.BASE_URL}/${URL_INFO_ACCOUNT}`, httpOptions).pipe(
      map((res: AccountResponse) => {
        return res.response;
      })
    );
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
