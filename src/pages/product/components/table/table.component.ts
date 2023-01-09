import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/types/product';
import { menuDropDowns } from 'src/utils/menuDropDowns';
@Component({
  selector: 'app-product-table',
  templateUrl: './table.component.html',
})
export class ProductTableComponent implements OnInit {
  public menuDropDowns = menuDropDowns;
  isModalDropDown: boolean = false;
  @Input() isModal: boolean = false;
  @Input() dataSources$!: Observable<Product[]>;
  @Input() total: any;
  IS_STT: boolean = false;
  IS_ID: boolean = false;
  IS_IMGAGE: boolean = true;
  IS_NAME: boolean = true;
  IS_RATING: boolean = true;
  IS_SOLD: boolean = false;
  IS_STOCK: boolean = true;
  IS_DISCOUNT: boolean = true;
  IS_PRICE_MIN: boolean = false;
  IS_PRICE: boolean = true;
  IS_PRICE_MAX: boolean = false;
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
  changeModal(item: any) {
    if (item.id === 0) {
      this.IS_STT = !this.IS_STT;
    }
    if (item.id === 1) {
      this.IS_ID = !this.IS_ID;
    }
    if (item.id === 2) {
      this.IS_IMGAGE = !this.IS_IMGAGE;
    }
    if (item.id === 3) {
      this.IS_NAME = !this.IS_NAME;
    }
    if (item.id === 4) {
      this.IS_RATING = !this.IS_RATING;
    }
    if (item.id === 5) {
      this.IS_SOLD = !this.IS_SOLD;
    }
    if (item.id === 6) {
      this.IS_STOCK = !this.IS_STOCK;
    }
    if (item.id === 7) {
      this.IS_DISCOUNT = !this.IS_DISCOUNT;
    }
    if (item.id === 8) {
      this.IS_PRICE_MIN = !this.IS_PRICE_MIN;
    }
    if (item.id === 9) {
      this.IS_PRICE = !this.IS_PRICE;
    }
    if (item.id === 10) {
      this.IS_PRICE_MAX = !this.IS_PRICE_MAX;
    }
  }

  constructor(private router: Router) {}
  ngOnInit(): void {}
}
