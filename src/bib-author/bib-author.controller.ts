import { Body, Get, Param, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { BibAuthorService } from './bib-author.service';
import { BibAuthorResponseDto } from './dto/bib-author-response.dto';
import { BibAuthorRequestDto } from './dto/bib-author-request.dto';

@Controller('bib-author')
export class BibAuthorController {
    constructor(private readonly bibAuthorService: BibAuthorService) { }
    @Get('')
    getHello(
        @Param('running_bib') running_bib: number,
        @Param('running_author') running_author: number
    ): BibAuthorResponseDto {
        return this.bibAuthorService.get(running_bib,running_author);
    }
    @Post()
    create(
        @Body() body: BibAuthorRequestDto
    ): BibAuthorResponseDto {
        return this.bibAuthorService.create(body);
    }

}
