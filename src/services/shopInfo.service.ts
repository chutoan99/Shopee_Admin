import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_INFO_SHOP } from './endpoint';
import { InfoShopResponse } from 'src/types/response/shopInfo.response';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShopInfoService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getInfoShop(): Observable<InfoShopResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getHeader(),
      }),
    };
    return this.http.get<InfoShopResponse>(`${environment.BASE_URL}/${URL_INFO_SHOP}`, httpOptions);
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
