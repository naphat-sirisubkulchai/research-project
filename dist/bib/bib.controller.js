"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibController = void 0;
const common_1 = require("@nestjs/common");
const bib_service_1 = require("./bib.service");
const bib_response_dto_1 = require("./dto/bib-response.dto");
const bib_request_dto_1 = require("./dto/bib-request.dto");
let BibController = exports.BibController = class BibController {
    bibService;
    constructor(bibService) {
        this.bibService = bibService;
    }
    getHello(running_num_bib, type, unique, author, date, doi, issn, journal, month, note, number, pages, scopusid, title, address, file, url, volumn, year, keywords, eissn, isbn, booktitle, link, sourcetype, pubtype, editor, chapter, publisher, owner, timestamp) {
        return this.bibService.get(running_num_bib, type, unique, author, date, doi, issn, journal, month, note, number, pages, scopusid, title, address, file, url, volumn, year, keywords, eissn, isbn, booktitle, link, sourcetype, pubtype, editor, chapter, publisher, owner, timestamp);
    }
    create(body) {
        return this.bibService.create(body);
    }
};
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('running_num_bib')),
    __param(1, (0, common_1.Param)('type')),
    __param(2, (0, common_1.Param)('unique')),
    __param(3, (0, common_1.Param)('author')),
    __param(4, (0, common_1.Param)('date')),
    __param(5, (0, common_1.Param)('doi')),
    __param(6, (0, common_1.Param)('issn')),
    __param(7, (0, common_1.Param)('journal')),
    __param(8, (0, common_1.Param)('month')),
    __param(9, (0, common_1.Param)('note')),
    __param(10, (0, common_1.Param)('number')),
    __param(11, (0, common_1.Param)('pages')),
    __param(12, (0, common_1.Param)('scopusid')),
    __param(13, (0, common_1.Param)('title')),
    __param(14, (0, common_1.Param)('address')),
    __param(15, (0, common_1.Param)('file')),
    __param(16, (0, common_1.Param)('url')),
    __param(17, (0, common_1.Param)('volumn')),
    __param(18, (0, common_1.Param)('year')),
    __param(19, (0, common_1.Param)('keywords')),
    __param(20, (0, common_1.Param)('eissn')),
    __param(21, (0, common_1.Param)('isbn')),
    __param(22, (0, common_1.Param)('booktitle')),
    __param(23, (0, common_1.Param)('link')),
    __param(24, (0, common_1.Param)('sourcetype')),
    __param(25, (0, common_1.Param)('pubtype')),
    __param(26, (0, common_1.Param)('editor')),
    __param(27, (0, common_1.Param)('chapter')),
    __param(28, (0, common_1.Param)('publisher')),
    __param(29, (0, common_1.Param)('owner')),
    __param(30, (0, common_1.Param)('timestamp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", bib_response_dto_1.BibResponseDto)
], BibController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bib_request_dto_1.BibRequestDto]),
    __metadata("design:returntype", bib_response_dto_1.BibResponseDto)
], BibController.prototype, "create", null);
exports.BibController = BibController = __decorate([
    (0, common_1.Controller)('bib'),
    __metadata("design:paramtypes", [bib_service_1.BibService])
], BibController);
//# sourceMappingURL=bib.controller.js.map