import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { AuthService } from '../auth/index.service';
import { RoomResponse } from './index.response';
import { environment } from 'src/environments/environment';
import { URL_ROOM } from '../endpoint';
import { Room } from 'src/types/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getRooms(): Observable<Room[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getHeader(),
      }),
    };
    return this.http.get<RoomResponse>(`${environment.BASE_URL}/${URL_ROOM}`, httpOptions).pipe(
      map((res: RoomResponse) => {
        return res.response;
      })
    );
  }
}
