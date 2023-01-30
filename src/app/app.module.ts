// Module
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Module
import { DiscountPipe } from 'src/pages/product/product.pipe';
import { ProductPaginationComponent } from 'src/pages/product/components/pagination/pagination.component';
import { ModalComponent } from 'src/pages/product/components/modal/modla.component';
import { ProductComponent } from 'src/pages/product/product.component';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { ChatComponent } from 'src/pages/chat/chat.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { AsideComponent } from 'src/components/aside/aside.component';
import { MainComponent } from 'src/pages/home/components/main/main.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { Row3Component } from 'src/pages/home/components/row3/row3.component';
import { Row1Component } from 'src/pages/home/components/row1/row1.component';
import { Row2Component } from 'src/pages/home/components/row2/row2.component';
import { Row4Component } from 'src/pages/home/components/row4/row4.component';
import { ItemChatComponent } from 'src/pages/chat/component/item/itemChat.component';
import { CommentComponent } from 'src/pages/comment/comment.component';
import { SocketioService } from 'src/services/socketio.service';
import { ProductTableComponent } from 'src/pages/product/components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from 'src/shared/store.module';
import { BarChartComponent } from 'src/pages/home/components/bar-chart/bar-chart.component';
import { LineChartComponent } from 'src/pages/home/components/line-chart/line-chart.component';
import { DetailProductComponent } from 'src/pages/product/detailProduct/detailProduct.component';
import { ShipRouteComponent } from 'src/pages/ship-route/ship-route.component';
import { ShipRouteInfoComponent } from 'src/pages/ship-route/components/info/ship-route-info.component';
import { ReceiptComponent } from 'src/pages/ship-route/components/receipt/receipt.component';
import { NotifyComponent } from 'src/components/notify/notify.component';

@NgModule({
  declarations: [
    DiscountPipe,
    BarChartComponent,
    LineChartComponent,
    ItemChatComponent,
    Row1Component,
    Row2Component,
    Row4Component,
    AppComponent,
    CommentComponent,
    ModalComponent,
    AsideComponent,
    Row3Component,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    ChatComponent,
    HomeComponent,
    ProductComponent,
    ProductPaginationComponent,
    ProductTableComponent,
    DetailProductComponent,
    ShipRouteComponent,
    ShipRouteInfoComponent,
    ReceiptComponent,
    NotifyComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
  ],

  providers: [SocketioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
