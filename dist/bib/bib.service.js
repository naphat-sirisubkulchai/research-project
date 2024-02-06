"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibService = void 0;
const common_1 = require("@nestjs/common");
let BibService = exports.BibService = class BibService {
    get(running_num_bib, type, unique, author, date, doi, issn, journal, month, note, number, pages, scopusid, title, address, file, url, volumn, year, keywords, eissn, isbn, booktitle, link, sourcetype, pubtype, editor, chapter, publisher, owner, timestamp) {
        const response = {
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
        };
        return response;
    }
    create(body) {
        const response = {
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
        };
        return response;
    }
};
exports.BibService = BibService = __decorate([
    (0, common_1.Injectable)()
], BibService);
//# sourceMappingURL=bib.service.js.map