import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { ShopInfoService } from 'src/services/shopInfo.service';
import { AppState } from 'src/shared/app.state';
import { getAllSuccess } from 'src/shared/inforShop/inforShop.actions';
import { InforShop } from 'src/types/inforShop.model';
import { InfoShopResponse } from 'src/types/response/shopInfo.response';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  inforShop$!: InforShop;
  constructor(private shopInfoService: ShopInfoService, private store: Store<AppState>) {}
  ngOnInit(): void {
    this.shopInfoService.getInfoShop().subscribe((res: InfoShopResponse) => {
      this.store.dispatch(getAllSuccess(res.response));
      this.inforShop$ = res.response;
    });
  }
}
