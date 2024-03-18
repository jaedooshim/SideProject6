import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { KakaoAuthGuard } from '../_common/_utils/guards/kakao.auth.guard';
import { Social } from '../_common/_utils/decorators/social.decorator';
import { oAuthDto } from './types/o-auth/request.dto';
import { NaverAuthGuard } from '../_common/_utils/guards/naver.auth.guard';
import { GoogleAuthGuard } from '../_common/_utils/guards/google.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('kakao')
  @UseGuards(KakaoAuthGuard)
  async kakao(@Social() social: oAuthDto): Promise<string> {
    return await this.authService.oAuthLogin(social);
  }

  @Get('naver')
  @UseGuards(NaverAuthGuard)
  async naver(@Social() social: oAuthDto): Promise<string> {
    return await this.authService.oAuthLogin(social);
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async google(@Social() social: oAuthDto): Promise<string> {
    return await this.authService.oAuthLogin(social);
  }
}
