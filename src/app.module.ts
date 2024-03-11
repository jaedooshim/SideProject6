import { Module } from '@nestjs/common';
import { PrismaModule } from './_common/prisma/prisma.module';
import { MemberModule } from './member/member.module';
import { JwtModule } from './_common/jwt/jwt.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, MemberModule, JwtModule, AuthModule],
})
export class AppModule {}
