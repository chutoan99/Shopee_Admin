import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { COMMENT_URL } from './endpoint';
import { Store } from '@ngrx/store';
import { getAllSuccess } from '../shared/comment/comment.actions';
import { Comment } from 'src/types/comment';
import { CommentResponse } from 'src/types/response/comment';
import { getAllFailed } from 'src/shared/product/product.actions';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient, private store: Store) {}
  // Observable biến hứng
  getAllComment(shopid: any): Observable<any> {
    const options = {
      params: new HttpParams().set('shopid', shopid),
    };
    return this.http.get<CommentResponse>(`${COMMENT_URL}`, options).pipe(
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
