import { User } from "./user";

export type loginResponse = {
  accessToken: string;
  user: User;
};
