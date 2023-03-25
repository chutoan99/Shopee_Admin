import { Order } from '../order.model';
export interface OrderResponse {
  err: number;
  msg: string;
  response: Order[];
}
