import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoutingModule } from 'src/routers/routing.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RoutingModule, FormsModule],
})
export class LoginModule {}
