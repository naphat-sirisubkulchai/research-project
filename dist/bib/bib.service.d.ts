import { BibResponseDto } from './dto/bib-response.dto';
import { BibRequestDto } from './dto/bib-request.dto';
export declare class BibService {
    get(running_num_bib: number, type: string, unique: string, author: string, date: string, doi: string, issn: string, journal: string, month: string, note: string, number: string, pages: string, scopusid: string, title: string, address: string, file: string, url: string, volumn: string, year: string, keywords: string, eissn: string, isbn: string, booktitle: string, link: string, sourcetype: string, pubtype: string, editor: string, chapter: string, publisher: string, owner: string, timestamp: string): BibResponseDto;
    create(body: BibRequestDto): BibResponseDto;
}
