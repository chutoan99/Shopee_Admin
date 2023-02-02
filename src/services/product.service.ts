import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAllSuccess } from 'src/shared/product/product.actions';
import { OVERVIEW } from './endpoint';
import { ProductResponse } from 'src/types/response/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private store: Store) {}
  // Observable biến hứng
  public total$ = new BehaviorSubject<number>(1);

  getAllProduct(query: any): Observable<any> {
    const options = {
      params: new HttpParams().set('page', query.page).set('limit', query.limit).set('shopid', query.shopid),
    };
    return this.http.get<ProductResponse>(`${OVERVIEW}`, options).pipe(
      tap((res: ProductResponse) => {
        return this.total$.next(res.response.count);
      }),
      map((res: any) => {
        this.store.dispatch(getAllSuccess(res.response.rows));
        return res.response.rows;
      })
    );
  }
}
