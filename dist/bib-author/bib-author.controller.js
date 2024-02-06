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
exports.BibAuthorController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const bib_author_service_1 = require("./bib-author.service");
const bib_author_response_dto_1 = require("./dto/bib-author-response.dto");
const bib_author_request_dto_1 = require("./dto/bib-author-request.dto");
let BibAuthorController = exports.BibAuthorController = class BibAuthorController {
    bibAuthorService;
    constructor(bibAuthorService) {
        this.bibAuthorService = bibAuthorService;
    }
    getHello(running_bib, running_author) {
        return this.bibAuthorService.get(running_bib, running_author);
    }
    create(body) {
        return this.bibAuthorService.create(body);
    }
};
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Param)('running_bib')),
    __param(1, (0, common_1.Param)('running_author')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", bib_author_response_dto_1.BibAuthorResponseDto)
], BibAuthorController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bib_author_request_dto_1.BibAuthorRequestDto]),
    __metadata("design:returntype", bib_author_response_dto_1.BibAuthorResponseDto)
], BibAuthorController.prototype, "create", null);
exports.BibAuthorController = BibAuthorController = __decorate([
    (0, common_2.Controller)('bib-author'),
    __metadata("design:paramtypes", [bib_author_service_1.BibAuthorService])
], BibAuthorController);
//# sourceMappingURL=bib-author.controller.js.map