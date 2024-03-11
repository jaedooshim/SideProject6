import { Injectable } from '@nestjs/common';
import { MemberService } from '../member/member.service';
import { JwtService } from '../_common/jwt/jwt.service';
import { IOAuth } from './types/o-auth/request.interface';
import { PrismaService } from '../_common/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private memberService: MemberService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  async oAuthLogin(data: IOAuth): Promise<string> {
    const member = await this.memberService.findFirstBySocialId(data.id);
    if (!member) {
      const createMember = await this.memberService.create(data);
      const accessToken = await this.jwtService.sign(createMember);
      return accessToken;
    } else {
      const accessToken = await this.jwtService.sign(member);
      return accessToken;
    }
  }

  /* 트랜잭션  */
  // async oAuthLogin(data: IOAuth): Promise<string> {
  //   return this.prismaService.$transaction(async (prisma) => {
  //     const member = await this.memberService.findFirstBySocialId(data.id, prisma);
  //     if (!member) {
  //       const createMember = await this.memberService.create(data, prisma);
  //       const accessToken = await this.jwtService.sign(createMember);
  //       return accessToken;
  //     } else {
  //       const accessToken = await this.jwtService.sign(member);
  //       return accessToken;
  //     }
  //   });
  // }
}
