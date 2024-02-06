import {IsNotEmpty, IsNumber } from 'class-validator';

export class BibAuthorResponseDto {
  @IsNotEmpty()
  @IsNumber()
  running_bib: number;

  @IsNotEmpty()
  @IsNumber()
  running_author: number;
}