import { environment } from '../environments/environment';

export const COMMENT = `${environment.BASE_URL}/comment/`;
export const OVERVIEW = `${environment.BASE_URL}/overview`;
export const LOGIN = `${environment.BASE_URL}/auth/login`;
export const SHOP_INFO = (shopid: number) => `${environment.BASE_URL}/shop/${shopid}`;
