import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/types/product';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/shared/app.state';
import { select, Store } from '@ngrx/store';
import { shopidSelector } from 'src/shared/inforShop/inforShop.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  dataSources$!: Observable<Product[]>;
  loading = false;
  listOfData: Product[] = [];
  getNumber(discount: String) {
    let xx: Number = +discount.replace(/[^0-9]/g, '');
    let resuft: boolean = false;
    if (xx >= 50) {
      resuft = true;
    } else {
      resuft = false;
    }
    return resuft;
  }
  ngOnInit(): void {
    const query = {
      page: 1,
      limit: 96,
      shopid: 88201679,
    };
    this.store.pipe(select(shopidSelector)).subscribe((res: number) => {
      query.shopid = res;
      if (res) this.dataSources$ = this.productService.getAllProduct(query);
      if (res) {
        this.productService.getAllProduct(query).subscribe((data: Product[]) => {
          this.listOfData = data;
          console.log(this.listOfData, 'lis');
        });
      }
    });
  }

  constructor(private productService: ProductService, private store: Store<AppState>) {}
}
