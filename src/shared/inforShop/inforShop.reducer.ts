import { createReducer, on } from '@ngrx/store';
import * as InForShopActions from './inforShop.actions';
import { InforShop } from '../../types/inforShop.model';

export interface InforShopState {
  items: InforShop;
  success: boolean;
  error: string | boolean;
}

const initialState: InforShopState = {
  items: {} as InforShop,
  success: false,
  error: false,
};

// // cách viết 1
export const inforShopReducer = createReducer(
  initialState,
  // get all
  on(InForShopActions.getAllStart, (state: InforShopState) => ({
    ...state,
  })),

  on(InForShopActions.getAllSuccess, (state: InforShopState, action: any) => ({
    success: true,
    items: action,
    error: false,
  })),

  on(InForShopActions.getAllFailed, (state: InforShopState, action: any) => ({
    ...state,
    success: false,
    error: action.error,
  }))
);
