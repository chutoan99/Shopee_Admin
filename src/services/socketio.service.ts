import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';
@Injectable({
  providedIn: 'root',
})
export class SocketioService implements OnInit {
  constructor() {}
  socket: any;
  ngOnInit(): void {
    this.socket = io('http://localhost:8080');
    this.socket.on('new message', (data: any) => {
      console.log(data);
    });
  }
  sendMessage(data: any): void {
    this.socket.emit('message', 'hello');
    console.log(data);
  }
  getMessage(): Observable<any> {
    return new Observable<{ user: string; message: string }>((observer) => {
      this.socket.on('new message', (data: any) => {
        observer.next(data);
        console.log(`you connected with id: ${this.socket.id}`);
      });

      return () => {
        this.socket.disconnect();
      };
    });
  }
}
