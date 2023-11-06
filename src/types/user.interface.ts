import {UserType} from '@/types/usertype.enum';

export interface User {
  firstname: string;
  lastname: string;
  avatarPath: string;
  email: string;
  type: UserType;
}
