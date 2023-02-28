import { Order } from '../order';
export interface OrderResponse {
  err: number;
  msg: string;
  response: Order[];
}
