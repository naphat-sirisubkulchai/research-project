import { Injectable } from '@nestjs/common';
import { BibResponseDto } from './dto/bib-response.dto';
import { BibRequestDto } from './dto/bib-request.dto';

@Injectable()
export class BibService {
    get(
        running_num_bib: number,
        type: string,
        unique: string,
        author: string,
        date: string,
        doi: string,
        issn: string,
        journal: string,
        month: string,
        note: string,
        number: string,
        pages: string,
        scopusid: string,
        title: string,
        address: string,
        file: string,
        url: string,
        volumn: string,
        year: string,
        keywords: string,
        eissn: string,
        isbn: string,
        booktitle: string,
        link: string,
        sourcetype: string,
        pubtype: string,
        editor: string,
        chapter: string,
        publisher: string,
        owner: string,
        timestamp: string,

    ): BibResponseDto {
        const response: BibResponseDto = {
            running_num_bib: running_num_bib,
            type: type,
            unique: unique,
            author: author,
            date: date,
            doi: doi,
            issn: issn,
            journal: journal,
            month: month,
            note: note,
            number: number,
            pages: pages,
            scopusid: scopusid,
            title: title,
            address: address,
            file: file,
            url: url,
            volumn: volumn,
            year: year,
            keywords: keywords,
            eissn: eissn,
            isbn: isbn,
            booktitle: booktitle,
            link: link,
            sourcetype: sourcetype,
            pubtype: pubtype,
            editor: editor,
            chapter: chapter,
            publisher: publisher,
            owner: owner,
            timestamp: timestamp
        }
        return response;
    }
    create(
        body: BibRequestDto
    ): BibResponseDto {
        const response: BibResponseDto = {
            running_num_bib: body.running_num_bib,
            type: body.type,
            unique: body.unique,
            author: body.author,
            date: body.date,
            doi: body.doi,
            issn: body.issn,
            journal: body.journal,
            month: body.month,
            note: body.note,
            number: body.number,
            pages: body.pages,
            scopusid: body.scopusid,
            title: body.title,
            address: body.address,
            file: body.file,
            url: body.url,
            volumn: body.volumn,
            year: body.year,
            keywords: body.keywords,
            eissn: body.eissn,
            isbn: body.isbn,
            booktitle: body.booktitle,
            link: body.link,
            sourcetype: body.sourcetype,
            pubtype: body.pubtype,
            editor: body.editor,
            chapter: body.chapter,
            publisher: body.publisher,
            owner: body.owner,
            timestamp: body.timestamp
        }
        return response;
    }
}
