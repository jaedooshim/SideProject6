import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '../_common/jwt/jwt.module';
import { MemberModule } from '../member/member.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [JwtModule, MemberModule, ConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
