import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/types/product';
import { Observable } from 'rxjs';
import { AppState } from 'src/shared/app.state';
import { select, Store } from '@ngrx/store';
import { shopidSelector } from 'src/shared/inforShop/inforShop.selector';

@Component({
  selector: 'app-home',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  isModal: boolean = false;
  dataSources$!: Observable<Product[]>;
  constructor(private productService: ProductService, private store: Store<AppState>) {}
  ngOnInit(): void {
    const query = {
      page: 1,
      limit: 96,
      shopid: 88201679,
    };
    this.store.pipe(select(shopidSelector)).subscribe((res: number) => {
      query.shopid = res;
      if (res) this.dataSources$ = this.productService.getAllProduct(query);
    });
  }
}
