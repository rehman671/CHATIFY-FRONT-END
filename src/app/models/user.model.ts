export interface User {
    id: string;
    email: string;
    isStaff: boolean;
    isActive: boolean;
    dateJoined: string;
    isLogin: boolean;
    lastLogin?: string;
    profilePicture?: string;
    friends: User[];
    following: User[];
  }
  

export interface UserProfile {
  id: String;
  user_name: String;
  profile_picture: String;
}