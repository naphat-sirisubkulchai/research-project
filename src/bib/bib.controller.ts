import { Body,Controller, Get, Param, Post } from '@nestjs/common';
import { BibService } from './bib.service';
import { BibResponseDto } from './dto/bib-response.dto';
import { BibRequestDto } from './dto/bib-request.dto';


@Controller('bib')
export class BibController {
    constructor(private readonly bibService: BibService) { }
    @Get(':name')
    getHello(
        @Param('running_num_bib') running_num_bib: number,
        @Param('type') type: string,
        @Param('unique') unique: string,
        @Param('author') author: string,
        @Param('date') date: string,
        @Param('doi') doi: string,
        @Param('issn') issn: string,
        @Param('journal') journal: string,
        @Param('month') month: string,
        @Param('note') note: string,
        @Param('number') number: string,
        @Param('pages') pages: string,
        @Param('scopusid') scopusid: string,
        @Param('title') title: string,
        @Param('address') address: string,
        @Param('file') file: string,
        @Param('url') url: string,
        @Param('volumn') volumn: string,
        @Param('year') year: string,
        @Param('keywords') keywords: string,
        @Param('eissn') eissn: string,
        @Param('isbn') isbn: string,
        @Param('booktitle') booktitle: string,
        @Param('link') link: string,
        @Param('sourcetype') sourcetype: string,
        @Param('pubtype') pubtype: string,
        @Param('editor') editor: string,
        @Param('chapter') chapter: string,
        @Param('publisher') publisher: string,
        @Param('owner') owner: string,
        @Param('timestamp') timestamp: string,
    ): BibResponseDto {
        return this.bibService.get(running_num_bib,type,unique,author,date,doi,issn,journal,month,note,number,pages,
            scopusid,title,address,file,url,volumn,year,keywords,eissn,isbn,booktitle,link,sourcetype,pubtype,editor,chapter,publisher,owner,timestamp);
    }
    @Post()
    create(
        @Body() body: BibRequestDto
    ): BibResponseDto {
        return this.bibService.create(body);
    }

}
