import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketioService {
  socket: Socket;
  public message$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
    this.socket = io('http://localhost:8000');
    this.socket.on('message', (data: any) => {
      console.log(data);
    });
  }

  sendMessage(data: any): void {
    this.socket.emit('message', data);
  }

  getNewMessage = (): Observable<string> => {
    this.socket.on('message', (message: string) => {
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };
}
