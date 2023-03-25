import { Auth } from '../auth.model';

export interface AuthResponse {
  err: number;
  msg: string;
  response: Auth;
  access_token: string;
}
