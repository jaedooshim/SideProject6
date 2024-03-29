import { Injectable } from '@nestjs/common';
import { PrismaService } from '../_common/prisma/prisma.service';
import { Member, Prisma } from '@prisma/client';

@Injectable()
export class MemberRepository {
  constructor(private prisma: PrismaService) {}

  private memberRepository = this.prisma.extendedClient.member;

  async create(data: Prisma.MemberCreateInput): Promise<Member> {
    return this.memberRepository.create({ data });
  }

  async findFirstBySocialId(socialId: string): Promise<Member | null> {
    return this.memberRepository.findFirst({ where: { socialId } });
  }
}
