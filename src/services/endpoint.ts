import { environment } from '../environments/environment';

export const COMMENT_URL = `${environment.BASE_URL}/comment/`;
export const OVERVIEW_URL = `${environment.BASE_URL}/overview`;
export const LOGIN_URL = `${environment.BASE_URL}/auth/login`;
export const SHOP_INFO_URL = (shopid: number) => `${environment.BASE_URL}/shop/${shopid}`;
export const ORDER_URL = (shopid: number) => `${environment.BASE_URL}/order?shopid=${shopid}`;
