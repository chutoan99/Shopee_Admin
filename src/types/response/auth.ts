import { Auth } from '../auth';

export interface AuthResponse {
  err: number;
  msg: string;
  response: Auth;
  access_token: string;
}
