import { IsEmail, IsString, IsNumber, IsOptional, buildMessage } from 'class-validator';


export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;


  @IsNumber()
  @IsOptional()
  // @ApiProperty({ example: '1205215', description: 'One time password' })
  public otp: number;
}


export class CreateUserDto1 {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
