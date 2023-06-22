import { Component, OnInit } from '@angular/core';
import { menuChat } from 'src/utils/menuChat';
import { contentChats } from 'src/utils/content-chat';
import { SocketioService } from 'src/services/socketio.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  contentChats: any = contentChats;
  text: any;
  payload = {
    type: 'me',
    avatar: '../assets/img/Avatar_2.png',
    content: '',
  };
  // socket
  user: String = '';
  room: String = '';
  chatMenu = menuChat;
  newMessage = '';
  messageList: string[] = [];
  modelChangeFn(e: any) {
    this.newMessage = e;
  }
  onSubmit() {
    this.payload.content = this.text;
    this.text = '';
    this.contentChats.push(this.payload);
  }

  // socketio
  constructor(private socketService: SocketioService) {}
  ngOnInit(): void {
    this.socketService.getNewMessage().subscribe((message: string) => {
      console.log(message, 'message');
    });
  }

  sendMessage() {
    this.socketService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
