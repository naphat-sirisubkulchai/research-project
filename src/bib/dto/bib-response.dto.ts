import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
export class BibResponseDto {
    @IsNotEmpty()
    @IsNumber()
    running_num_bib: number;

    @IsNotEmpty()
    @IsString()
    type: string

    @IsNotEmpty()
    @IsString()
    unique: string

    @IsString()
    author: string

    @IsString()
    date: string

    @IsString()
    doi: string

    @IsString()
    issn: string

    @IsString()
    journal: string

    @IsString()
    month: string

    @IsString()
    note: string

    @IsString()
    number: string

    @IsString()
    pages: string

    @IsString()
    scopusid: string
    
    @IsString()
    title: string

    @IsString()
    address: string

    @IsString()
    file: string

    @IsString()
    url: string

    @IsString()
    volumn: string

    @IsString()
    year: string

    @IsString()
    keywords: string

    @IsString()
    eissn: string

    @IsString()
    isbn: string

    @IsString()
    booktitle: string

    @IsString()
    link: string

    @IsString()
    sourcetype: string

    @IsString()
    pubtype: string

    @IsString()
    editor: string

    @IsString()
    chapter: string

    @IsString()
    publisher: string

    @IsString()
    owner: string

    @IsString()
    timestamp: string


}
