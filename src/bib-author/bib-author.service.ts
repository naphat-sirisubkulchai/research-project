import { Injectable } from '@nestjs/common';
import { BibAuthorResponseDto } from './dto/bib-author-response.dto';
import { BibAuthorRequestDto } from './dto/bib-author-request.dto';

@Injectable()
export class BibAuthorService {
    get(
        running_bib: number,
        running_author: number
        
    ): BibAuthorResponseDto{
        const response: BibAuthorResponseDto = {
            running_bib: running_bib,
            running_author: running_author
        }
        return response;
    }
    create(
        body: BibAuthorRequestDto
        ):BibAuthorResponseDto{
        const response: BibAuthorResponseDto = {
            running_bib: body.running_bib,
            running_author: body.running_author
        }
        return response;
    }
}
