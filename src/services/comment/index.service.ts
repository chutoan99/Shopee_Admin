import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { getAllSuccess } from '../../shared/comment/comment.actions';
import { Comment } from 'src/types/comment.model';
import { AuthService } from '../auth/index.service';
import { environment } from 'src/environments/environment';
import { CommentResponse } from './index.response';
import { URL_COMMENT } from '../endpoint';
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
