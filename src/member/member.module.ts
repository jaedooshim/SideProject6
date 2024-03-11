import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { PrismaModule } from '../_common/prisma/prisma.module';
import { MemberRepository } from './member.repository';

@Module({
  imports: [PrismaModule],
  controllers: [MemberController],
  providers: [MemberService, MemberRepository],
  exports: [MemberService],
})
export class MemberModule {}
