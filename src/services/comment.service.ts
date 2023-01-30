import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { COMMENT } from './endpoint';
import { Store } from '@ngrx/store';
import { getAllSuccess } from '../shared/comment/comment.actions';
import { Comment } from 'src/types/comment';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient, private store: Store) {}
  // Observable biến hứng
  getAllComment(query: any): Observable<any> {
    return this.http.get(`${COMMENT}/?${query}`).pipe(
      tap(),
      map((res: any) => {
        this.store.dispatch(getAllSuccess(res.response));
        return res?.response;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
