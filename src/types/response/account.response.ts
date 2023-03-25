import { AccountShop } from '../account.model';

export interface AccountResponse {
  err: number;
  msg: string;
  response: AccountShop;
}
