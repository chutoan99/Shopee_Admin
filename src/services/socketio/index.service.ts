import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { ShopInfor } from 'src/types/inforShop.model';
import { MessModel } from 'src/types/mess.model';
import { UserInfor } from 'src/types/user.model';

interface Mess {
  user: ShopInfor;
  shop: UserInfor;
  roomid: number;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class SocketioService {
  socket: Socket;
  public listMess$: BehaviorSubject<any> = new BehaviorSubject<MessModel[]>([]);
  public message$: BehaviorSubject<any> = new BehaviorSubject<Mess>({
    user: {} as ShopInfor,
    shop: {} as UserInfor,
    roomid: 0,
    message: '',
  });

  constructor() {
    this.socket = io('http://localhost:8000');

    this.socket.on('message', (data: MessModel[]) => {
      console.log(data, 'New message received');
      this.message$.next(data);
    });

    this.socket.on('room', (data: MessModel[]) => {
      this.listMess$.next(data);
    });
  }

  disconnect() {
    this.socket.disconnect();
  }

  sendMessage(data: Mess): void {
    this.socket.emit('message', data);
  }

  activeRoom(roomid: number) {
    this.socket.emit('room', roomid);
  }

  getMessage() {
    return this.listMess$;
  }
}
