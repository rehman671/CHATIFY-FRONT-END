import { User } from './user.model';
import { Post } from './post.model';

export interface Comment {
  id: string;
  content: string;
  post: Post;
  author: User;
}
