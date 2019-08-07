import { LoginData } from "./login-data";
import {Address} from "./address";
export class User implements Address{
  name: string;
  email: string;
  address: LoginData;
  logged: boolean;
  username: string;
  password: string;
}