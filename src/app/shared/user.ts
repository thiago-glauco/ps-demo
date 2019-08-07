import { LoginData } from "./login-data";
import {Address} from "./address";
export class User implements Address{
  name: string;
  email: string;
  tel: string;
  city: string;
  street: string;
  num: string;
  complement: string;
  country: string;
  state: string;
  logged: boolean;
  username: string;
  password: string;
}