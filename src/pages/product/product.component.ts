import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/types/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  isModal: boolean = false;
  dataSources$!: Observable<Product[]>;

  ngOnInit(): void {
    this.dataSources$ = this.productService.getAllProduct('shopid=88201679');
  }

  constructor(private productService: ProductService) {}
}
