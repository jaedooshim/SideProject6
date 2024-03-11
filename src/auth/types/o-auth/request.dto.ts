import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export enum oAuthPlatform {
  KAKAO = 'KAKAO',
  GOOGLE = 'GOOGLE',
  NAVER = 'NAVER',
}

export class oAuthDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  nickname?: string;

  @IsOptional()
  @IsString()
  profileImage?: string;

  @IsEnum(oAuthPlatform)
  @IsNotEmpty()
  platform: oAuthPlatform;
}
