import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { DiscountPipe } from './product.pipe';
import { ModalComponent } from './components/modal/modla.component';
import { ProductComponent } from './product.component';
import { DetailProductComponent } from './detailProduct/detailProduct.component';
import { HeaderModule } from 'src/components/header/header.module';
import { AsideModule } from 'src/components/aside/aside.module';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
@NgModule({
  declarations: [DiscountPipe, ModalComponent, ProductComponent, DetailProductComponent, ProductListComponent, ProductGridComponent],
  imports: [
    NzRateModule,
    NzDropDownModule,
    NzPaginationModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AsideModule,
    HeaderModule,
  ],
})
export class ProductModule {}
