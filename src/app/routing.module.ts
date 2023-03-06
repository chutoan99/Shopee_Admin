import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// các pages
import { ProductComponent } from 'src/pages/product/product.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { ChatComponent } from '../pages/chat/chat.component';
import { CommentComponent } from 'src/pages/comment/comment.component';
import { DetailProductComponent } from 'src/pages/product/detailProduct/detailProduct.component';
import { ShipRouteComponent } from 'src/pages/ship-route/ship-route.component';
import { OrderComponent } from 'src/pages/order/order.component';
import { environment } from 'src/environments/environment';
import { AppGuard } from 'src/app/app.guard';
import { ReportComponent } from 'src/pages/report/report.component';
import { SettingComponent } from 'src/pages/setting/setting.component';
import { UserComponent } from 'src/pages/user/user.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AppGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AppGuard],
  },
  {
    path: 'product',
    canActivate: [AppGuard],
    children: [
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'detail/:itemid',
        component: DetailProductComponent,
      },
    ],
  },

  {
    path: 'comments',
    component: CommentComponent,
    canActivate: [AppGuard],
  },
  {
    path: 'orders',
    component: OrderComponent,
    canActivate: [AppGuard],
  },
  {
    path: 'reports',
    component: ReportComponent,
    canActivate: [AppGuard],
  },
  {
    path: 'settings',
    component: SettingComponent,
    canActivate: [AppGuard],
  },
  {
    path: 'ship',
    component: ShipRouteComponent,
    canActivate: [AppGuard],
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AppGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { enableTracing: !environment.production })],
  exports: [RouterModule],
})
export class RoutingModule {}
