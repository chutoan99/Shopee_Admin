import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap, catchError } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAllSuccess } from 'src/shared/product/product.actions';
import { URL_PRODUCT } from './endpoint';
import { ProductResponse } from 'src/types/response/product.response';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { Product } from 'src/types/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public total$ = new BehaviorSubject<number>(1);

  getAllProduct(query: any): Observable<Product[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getHeader(),
      }),
      params: new HttpParams().set('page', query.page).set('limit', query.limit),
    };
    return this.http.get<ProductResponse>(`${environment.BASE_URL}/${URL_PRODUCT}`, httpOptions).pipe(
      tap((res: ProductResponse) => {
        return this.total$.next(res.response.count);
      }),
      map((res: any) => {
        this.store.dispatch(getAllSuccess(res.response.rows));
        return res.response.rows;
      })
    );
  }

  constructor(private http: HttpClient, private authService: AuthService, private store: Store) {}
}
