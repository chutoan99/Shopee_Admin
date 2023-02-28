import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AsideModule } from 'src/components/aside/aside.module';
// Module

import { ItemChatComponent } from 'src/pages/chat/component/item/itemChat.component';
@NgModule({
  declarations: [ChatComponent, ItemChatComponent],
  imports: [CommonModule, FormsModule, BrowserModule, HttpClientModule, RouterModule, AsideModule],
})
export class ChatModule {}
