import { User } from './user.model';
import { Post } from './post.model';

export interface Like {
  id: string;
  user: User;
  post: Post;
}
