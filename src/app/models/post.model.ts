import { UserProfile } from './user.model';
import { Tag } from './tag.model';

export interface Post {
  id: String;
  content?: String;
  author: UserProfile;
  privacy: String;
  shareCount: number;
  location?: String;
  isActive: boolean;
  sharedPost?: Post;
  tags: Tag[];
  created_at: String;
}

export interface GroupPost {
  id: String;
  post: Post;
  groupId: String;
}
