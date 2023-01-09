import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAllSuccess } from 'src/shared/product/product.actions';
import { OVERVIEW } from 'src/api/endpoint';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private store: Store) {}
  // Observable biến hứng
  public total$ = new BehaviorSubject<number>(1);
  getAllProduct(query: any): Observable<any> {
    return this.http.get(`${OVERVIEW}/?${query}`).pipe(
      tap((res: any) => {
        return this.total$.next(res.response.count);
      }),
      map((res: any) => {
        this.store.dispatch(getAllSuccess(res.response.rows));
        return res.response.rows;
      })
    );
  }
}
