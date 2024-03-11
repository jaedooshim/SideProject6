import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IRequest } from '../interfaces/request.interface';

export const Social = createParamDecorator((data: unknown, input: ExecutionContext) => {
  const request: IRequest = input.switchToHttp().getRequest();
  return request.social;
});
