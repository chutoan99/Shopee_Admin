import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './home.component';
import { Row3Component } from './components/row3/row3.component';
import { Row1Component } from './components/row1/row1.component';
import { Row2Component } from './components/row2/row2.component';
import { Row4Component } from './components/row4/row4.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { AsideModule } from 'src/components/aside/aside.module';
import { HeaderModule } from 'src/components/header/header.module';
import { NotifyModule } from 'src/components/notify/notify.module';

@NgModule({
  declarations: [MainComponent, HomeComponent, Row3Component, Row1Component, Row2Component, Row4Component, BarChartComponent, LineChartComponent],
  imports: [CommonModule, FormsModule, BrowserModule, HttpClientModule, RouterModule, AsideModule, HeaderModule, NotifyModule],
})
export class HomeModule {}
