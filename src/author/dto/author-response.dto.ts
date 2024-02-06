import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class AuthorResponseDto {
  @IsNotEmpty()
  @IsNumber()
  running_num_author: number;

  @IsNotEmpty()
  @IsString()
  fname: string;

  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsNumber()
  author_id: number;
}