import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginUser {
  @IsEmail()
  @MinLength(1)
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
