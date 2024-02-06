import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class BibAuthorRequestDto {
  @IsNotEmpty()
  @IsNumber()
  running_bib: number;

  @IsNotEmpty()
  @IsNumber()
  running_author: number;
}
