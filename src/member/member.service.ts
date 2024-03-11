import { Injectable } from '@nestjs/common';
import { MemberRepository } from './member.repository';
import { IOAuth } from '../auth/types/o-auth/request.interface';
import { Member } from '@prisma/client';

@Injectable()
export class MemberService {
  constructor(private memberRepository: MemberRepository) {}

  async create(data: IOAuth): Promise<Member> {
    return await this.memberRepository.create({ socialId: data.id, email: data.email, nickname: data.nickname, profileImage: data.profileImage, platform: data.platform });
  }

  async findFirstBySocialId(socialId: string): Promise<Member | null> {
    return await this.memberRepository.findFirstBySocialId(socialId);
  }
}
