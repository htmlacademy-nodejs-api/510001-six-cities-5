import {UserType} from '@/types/usertype.enum';

export interface User {
  firstname: string;
  avatarPath: string;
  email: string;
  type: keyof typeof UserType;
}
