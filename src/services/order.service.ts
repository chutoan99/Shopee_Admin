import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ORDER_URL } from './endpoint';
import { Store } from '@ngrx/store';
import { getAllSuccess, getAllFailed } from '../shared/order/order.actions';
import { Order } from 'src/types/order';
import { OrderResponse } from 'src/types/response/order';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient, private store: Store) {}
  // Observable biến hứng
  getAllOrder(shopid: any): Observable<any> {
    const options = {
      params: new HttpParams().set('shopid', shopid),
    };
    return this.http.get<OrderResponse>(`${ORDER_URL}`, options).pipe(
      tap(),
      map((res: any) => {
        this.store.dispatch(getAllSuccess(res.response));
        return res?.response;
      }),
      catchError((err) => {
        this.store.dispatch(getAllFailed(err));
        return throwError(err);
      })
    );
  }
}
