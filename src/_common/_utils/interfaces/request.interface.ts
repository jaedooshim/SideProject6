import { IPayload } from '../../jwt/types/payload.interface';
import { Request } from 'express';
import { IOAuth } from '../../../auth/types/o-auth/request.interface';

export interface IRequest extends Request {
  social: IOAuth;
  member: IPayload;
}
