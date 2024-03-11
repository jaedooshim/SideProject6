import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Member } from '@prisma/client';
import { sign, verify } from 'jsonwebtoken';
import { IPayload } from './types/payload.interface';

@Injectable()
export class JwtService {
  constructor(private configService: ConfigService) {}

  sign(member: Member): string {
    const { id, email, nickname, profileImage, platform } = member;
    return sign({ id, email, nickname, profileImage, platform }, this.configService.get<string>('ACCESS_TOKEN_SECRET_KEY')!, {
      expiresIn: this.configService.get<string>('ACCESS_TOKEN_EXPIRES_IN')!,
    });
  }

  verify(accessToken: string): IPayload | string {
    try {
      return verify(accessToken, this.configService.get<string>('ACCESS_TOKEN_SECRET_KEY')!) as IPayload;
    } catch (err) {
      return err.message as string;
    }
  }
}
