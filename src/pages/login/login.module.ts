import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
// Module
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Module
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, BrowserModule, HttpClientModule],
})
export class LoginModule {}
