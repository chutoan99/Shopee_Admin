import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { commentReducer } from './comment/comment.reducer';
import { productReducer } from './product/product.reducer';

@NgModule({
  imports: [StoreModule.forFeature('comment', commentReducer), StoreModule.forFeature('product', productReducer)],
})
export class CoreModule {}
