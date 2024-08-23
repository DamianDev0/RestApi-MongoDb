import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from '../dto/user.dto';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  private readonly secret = 'your_secret_key';

  use(req: Request & { user?: JwtPayload }, res: Response, next: NextFunction) {
    // Registro de solicitud
    console.log(`Request... ${req.method} ${req.url}`);

    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];

      try {
        const decoded = jwt.verify(token, this.secret) as JwtPayload;
        console.log('Decoded JWT:', decoded);
        req.user = decoded;
        next();
      } catch (error) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }
    } else {
      throw new HttpException('Token not provided', HttpStatus.UNAUTHORIZED);
    }
  }
}
