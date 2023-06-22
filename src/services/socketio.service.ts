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
    this.socket = io('https://server-shopee.onrender.com');
    this.socket.on('new message', (data: any) => {
      console.log(data);
    });
  }

  sendMessage(data: any): void {
    this.socket.emit('message', data);
  }

  getNewMessage = () => {
    this.socket.on('message', (message) => {
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };
}
