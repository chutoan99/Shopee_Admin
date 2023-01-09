import { Component, Input, OnInit } from '@angular/core';
import { contentChats } from 'src/utils/content-chat';
@Component({
  selector: 'app-item-chat',
  templateUrl: './itemChat.component.html',
})
export class ItemChatComponent implements OnInit {
  contentChats: any = contentChats;
  @Input() text: String = '';
  constructor() {}
  public ngOnInit(): void {}
}
