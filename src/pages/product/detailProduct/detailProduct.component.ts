import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/types/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detailProduct.component.scss'],
})
export class DetailProductComponent implements OnInit {
  isModal: boolean = false;
  dataSources$!: Observable<Product[]>;

  ngOnInit(): void {
    this.dataSources$ = this.productService.getAllProduct('shopid=106933589');
  }
  constructor(private productService: ProductService, private store: Store) {}
}
