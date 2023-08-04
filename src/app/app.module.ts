// Module
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Module

import { AppComponent } from './app.component';

import { SocketioService } from 'src/services/socketio.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from 'src/shared/store.module';
import { LoginModule } from 'src/pages/login/login.module';
import { ChatModule } from 'src/pages/chat/chat.module';
import { CommentModule } from 'src/pages/comment/comment.module';
import { ShipRouteModule } from 'src/pages/ship-route/ship-route.module';
import { ProductModule } from 'src/pages/product/product.module';
import { HomeModule } from 'src/pages/home/home.module';
import { OrderModule } from 'src/pages/order/order.module';
import { ReportModule } from 'src/pages/report/report.module';
import { SettingModule } from 'src/pages/setting/setting.module';
import { IndexModule } from 'src/pages/index/index.module';
import { UserModule } from 'src/pages/user/user.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);
@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    ShipRouteModule,
    IndexModule,
    LoginModule,
    ChatModule,
    UserModule,
    HomeModule,
    ProductModule,
    OrderModule,
    SettingModule,
    RoutingModule,
    CommentModule,
    FormsModule,
    ReportModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
  ],

  providers: [SocketioService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
