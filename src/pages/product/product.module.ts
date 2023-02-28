import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { DiscountPipe } from './product.pipe';
import { ProductPaginationComponent } from './components/pagination/pagination.component';
import { ModalComponent } from './components/modal/modla.component';
import { ProductComponent } from './product.component';
import { ProductTableComponent } from './components/table/table.component';
import { DetailProductComponent } from './detailProduct/detailProduct.component';
import { HeaderModule } from 'src/components/header/header.module';
import { AsideModule } from 'src/components/aside/aside.module';
@NgModule({
  declarations: [DiscountPipe, ProductPaginationComponent, ModalComponent, ProductComponent, ProductTableComponent, DetailProductComponent],
  imports: [CommonModule, FormsModule, BrowserModule, HttpClientModule, RouterModule, AsideModule, HeaderModule],
})
export class ProductModule {}
