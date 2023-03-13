import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { ShopInfoService } from 'src/services/shopInfo.service';
import { AppState } from 'src/shared/app.state';
import { getAllSuccess } from 'src/shared/inforShop/inforShop.actions';
import { InforShop } from 'src/types/inforShop';
import { InfoShopResponse } from 'src/types/response/shopInfo';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  inforShop$!: InforShop;
  constructor(private shopInfoService: ShopInfoService, private store: Store<AppState>) {}
  shopid: any;
  ngOnInit(): void {
    const xx = localStorage.getItem('shopid');
    if (xx !== null) {
      this.shopid = +xx;
    }
    this.shopInfoService.getInfoShop(this.shopid).subscribe((res: InfoShopResponse) => {
      this.store.dispatch(getAllSuccess(res.response));
      this.inforShop$ = res.response;
    });
  }
}
