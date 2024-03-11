import { platform } from '@prisma/client';

export interface IOAuth {
  id: string;
  email?: string;
  nickname?: string;
  profileImage?: string;
  platform: platform;
}
