import { User } from './user.model';

export interface Group {
  id: string;
  admin?: User;
  subscribers: User[];
}
