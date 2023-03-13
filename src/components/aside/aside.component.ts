import { Component } from '@angular/core';
import { navigation } from 'src/utils/navs';
import { logoApp } from '../../utils/orthers';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  navigation: any = navigation;
  logoApp: any = logoApp;
}
