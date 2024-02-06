import { BibAuthorService } from './bib-author.service';
import { BibAuthorResponseDto } from './dto/bib-author-response.dto';
import { BibAuthorRequestDto } from './dto/bib-author-request.dto';
export declare class BibAuthorController {
    private readonly bibAuthorService;
    constructor(bibAuthorService: BibAuthorService);
    getHello(running_bib: number, running_author: number): BibAuthorResponseDto;
    create(body: BibAuthorRequestDto): BibAuthorResponseDto;
}
