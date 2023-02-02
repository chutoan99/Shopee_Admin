import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SHOP_INFO } from './endpoint';
import { InfoShopResponse } from 'src/types/response/shopInfo';

@Injectable({
  providedIn: 'root',
})
export class ShopInfoService {
  constructor(private http: HttpClient) {}
  // Observable biến hứng

  getInfoShop(shopid: number) {
    return this.http.get<InfoShopResponse>(SHOP_INFO(shopid));
  }
}
