import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { KakaoAuthGuard } from '../_common/_utils/guards/kakao.auth.guard';
import { Social } from '../_common/_utils/decorators/social.decorator';
import { oAuthDto } from './types/o-auth/request.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('kakao')
  @UseGuards(KakaoAuthGuard)
  async kakao(@Social() social: oAuthDto): Promise<string> {
    return await this.authService.oAuthLogin(social);
  }
}
