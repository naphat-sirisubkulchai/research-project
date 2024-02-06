import { BibAuthorResponseDto } from './dto/bib-author-response.dto';
import { BibAuthorRequestDto } from './dto/bib-author-request.dto';
export declare class BibAuthorService {
    get(running_bib: number, running_author: number): BibAuthorResponseDto;
    create(body: BibAuthorRequestDto): BibAuthorResponseDto;
}
