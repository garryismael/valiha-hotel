import { User } from "./user";

export interface Blog {
  id: string;
  title: string;
  text: string;
  user: User;
  image: string;
}
