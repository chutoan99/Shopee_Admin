import { Actions } from '@ngrx/effects';
import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { Product } from '../../types/product';

export interface ProductState {
  items: Product[];
  status: 'loading' | 'loaded' | 'error';
  error?: string;
}

const initialState: ProductState = {
  items: [],
  status: 'loaded',
  error: '',
};

// // cách viết 1
export const productReducer = createReducer(
  initialState,
  // get all
  on(ProductActions.getAllProduct, (state: any) => ({
    ...state,
    status: 'loading',
  })),

  on(ProductActions.getAllSuccess, (state: any, action: any) => ({
    ...state,
    status: 'loaded',
    items: action,
    error: '',
  })),

  on(ProductActions.getAllFailed, (state: any, action: any) => ({
    ...state,
    status: 'error',
    error: action.error,
  }))
);

// // cách viết 2

// export function commentReducer(state: CommentState = initialState, action: CommentActions.CommentActions): CommentState {
//   console.log(action);
//   switch (action.type) {
//     // get all
//     case CommentActions.GET_COMMENTS:
//       return {
//         ...state,
//         items : action.payload
//         status: 'loading',
//       };

//     case CommentActions.GET_COMMENTS_SUCCESS:
//       return {
//         ...state,
//         status: 'loaded',
//         items: action.Comments,
//         error: '',
//       };

//     case CommentActions.GET_COMMENTS_FAILED:
//       return {
//         ...state,
//         status: 'error',
//         items: [],
//         error: action.error,
//       };

//     default:
//       return state;
//   }
// }
