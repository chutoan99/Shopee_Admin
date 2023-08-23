import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { AuthService } from '../auth/index.service';
import { InfoShopResponse } from './index.response';
import { environment } from 'src/environments/environment';
import { URL_INFO_SHOP } from '../endpoint';
import { ShopInfor } from 'src/types/inforShop.model';
@Injectable({
  providedIn: 'root',
})
export class ShopInfoService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getInfoShop(): Observable<ShopInfor> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getHeader(),
      }),
    };
    return this.http.get<InfoShopResponse>(`${environment.BASE_URL}/${URL_INFO_SHOP}`, httpOptions).pipe(
      map((res: InfoShopResponse) => {
        return res.response;
      })
    );
  }

  UpdateInfoShop(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getHeader(),
      }),
    };
    const payload = {
      is_official_shop: true,
      name: '',
      cover: '',
      status: 1,
      shop_location: '',
      username: '',
      portrait: '',
      description: '',
      country: '',
    };
    return this.http.put<any>(`${environment.BASE_URL}/${URL_INFO_SHOP}`, payload, httpOptions);
  }
}
