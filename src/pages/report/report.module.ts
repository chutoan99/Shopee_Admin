import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AsideModule } from 'src/components/aside/aside.module';
import { HeaderModule } from 'src/components/header/header.module';
import { ReportComponent } from './report.component';

@NgModule({
  declarations: [ReportComponent],
  imports: [CommonModule, FormsModule, BrowserModule, HttpClientModule, RouterModule, AsideModule, HeaderModule],
})
export class ReportModule {}
