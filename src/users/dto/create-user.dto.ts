import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  username: string;

  @IsEmail()
  @MinLength(1)
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  role: string;
}
