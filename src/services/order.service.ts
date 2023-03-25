import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL_ORDER } from './endpoint';
import { Store } from '@ngrx/store';
import { getAllSuccess, getAllFailed } from '../shared/order/order.actions';
import { Order } from 'src/types/order.model';
import { OrderResponse } from 'src/types/response/order.response';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  public total$ = new BehaviorSubject<number>(1);
  // Observable biến hứng
  getAllOrder(query: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getHeader(),
      }),
      params: new HttpParams().set('page', query.page).set('limit', query.limit),
    };
    return this.http.get<OrderResponse>(`${environment.BASE_URL}/${URL_ORDER}`, httpOptions).pipe(
      tap((res: OrderResponse) => {
        // return this.total$.next(res.response.count);
      }),
      map((res: any) => {
        // this.store.dispatch(getAllSuccess(res.response.rows));
        // return res.response.rows;
      }),
      catchError((err) => {
        this.store.dispatch(getAllFailed(err));
        return throwError(err);
      })
    );
  }
  constructor(private http: HttpClient, private authService: AuthService, private store: Store) {}
}
