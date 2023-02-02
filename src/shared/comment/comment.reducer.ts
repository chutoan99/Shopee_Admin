import { createReducer, on } from '@ngrx/store';
import * as CommentActions from './comment.actions';
import { Comment } from '../../types/comment';

export interface CommentState {
  items: Comment[];
  success: boolean;
  error: boolean | string;
}

const initialState: CommentState = {
  items: [],
  success: false,
  error: false,
};

// // cách viết 1
export const commentReducer = createReducer(
  initialState,
  // get all
  on(CommentActions.getAllStart, (state: CommentState) => ({
    ...state,
  })),

  on(CommentActions.getAllSuccess, (state: CommentState, action: any) => ({
    ...state,
    success: true,
    items: action,
  })),

  on(CommentActions.getAllFailed, (state: CommentState, action: any) => ({
    items: [],
    success: false,
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
