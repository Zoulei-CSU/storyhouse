export type StorageMode = 'server' | 'local';

export interface UserProfile {
  name: string;
  bio: string;
  avatarEmoji: string;
  avatarColor: string;
  favorites: string[];
  history: string[];
  createdAt: string;
  updatedAt: string;
}

export interface UserProfilePatch {
  bio?: string;
  avatarEmoji?: string;
  avatarColor?: string;
  favorites?: string[];
  history?: string[];
}
