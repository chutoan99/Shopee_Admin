import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/shared/app.state';
import { productSelector } from 'src/shared/product/product.selector';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.pipe(select(productSelector));
  }
}
