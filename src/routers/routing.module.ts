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
import { environment } from 'src/environments/environment';
import { AppGuard } from 'src/app/app.guard';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
    // canActivate: [AppGuard],
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'detail/:itemid',
    component: DetailProductComponent,
  },
  {
    path: 'comments',
    component: CommentComponent,
  },
  {
    path: 'ship',
    component: ShipRouteComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { enableTracing: !environment.production })],
  exports: [RouterModule],
})
export class RoutingModule {}
