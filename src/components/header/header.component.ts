import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ShopInfoService } from 'src/services/shopInfo.service';
import { inforShop } from 'src/types/inforShop';
import { header } from 'src/utils/orthers';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  header: any = header;
  inforShop: any;
  constructor(private shopInfoService: ShopInfoService) {}

  ngOnInit(): void {
    this.shopInfoService.getInfoShop(88201679).subscribe((res: any) => {
      this.inforShop = res.response;
    });
  }
}
