import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL_COMMENT } from './endpoint';
import { Store } from '@ngrx/store';
import { getAllSuccess, getAllFailed } from '../shared/comment/comment.actions';
import { Comment } from 'src/types/comment.model';
import { CommentResponse } from 'src/types/response/comment.response';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  public total$ = new BehaviorSubject<number>(1);
  getAllComment(query: any): Observable<Comment[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getHeader(),
      }),
      params: new HttpParams().set('page', query.page).set('limit', query.limit),
    };

    return this.http.get<CommentResponse>(`${environment.BASE_URL}/${URL_COMMENT}`, httpOptions).pipe(
      tap((res: CommentResponse) => {
        return this.total$.next(res?.totalPage);
      }),
      map((res: any) => {
        this.store.dispatch(getAllSuccess(res.response));
        return res.response;
      })
    );
  }

  constructor(private http: HttpClient, private authService: AuthService, private store: Store) {}
}
