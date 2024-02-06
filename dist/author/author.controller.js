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
exports.AuthorController = void 0;
const common_1 = require("@nestjs/common");
const author_service_1 = require("./author.service");
const author_response_dto_1 = require("./dto/author-response.dto");
const author_request_dto_1 = require("./dto/author-request.dto");
let AuthorController = exports.AuthorController = class AuthorController {
    authorService;
    constructor(authorService) {
        this.authorService = authorService;
    }
    getHello(running_num_author, author_id, fname, surname) {
        return this.authorService.get(running_num_author, author_id, fname, surname);
    }
    getByAuthorId(authorId) {
        return this.authorService.getByAuthorId(authorId);
    }
    create(body) {
        return this.authorService.create(body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('running_num_author')),
    __param(1, (0, common_1.Param)('author_id')),
    __param(2, (0, common_1.Param)('fname')),
    __param(3, (0, common_1.Param)('surname')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", author_response_dto_1.AuthorResponseDto)
], AuthorController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)(':author_id'),
    __param(0, (0, common_1.Param)('author_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", author_response_dto_1.AuthorResponseDto)
], AuthorController.prototype, "getByAuthorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [author_request_dto_1.AuthorRequestDto]),
    __metadata("design:returntype", author_response_dto_1.AuthorResponseDto)
], AuthorController.prototype, "create", null);
exports.AuthorController = AuthorController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorController);
//# sourceMappingURL=author.controller.js.map