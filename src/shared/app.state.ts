import { CommentState } from './comment/comment.reducer';
import { ProductState } from './product/product.reducer';
import { InforShopState } from './inforShop/inforShop.reducer';

export interface AppState {
  feature_product: ProductState;
  feature_comment: CommentState;
  feature_inforShop: InforShopState;
}
