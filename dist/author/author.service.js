"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorService = void 0;
const common_1 = require("@nestjs/common");
let AuthorService = exports.AuthorService = class AuthorService {
    authors = [
        {
            running_num_author: 1,
            author_id: 1,
            fname: "Sujin",
            surname: "Khomrutai"
        },
    ];
    get(running_num_author, author_id, fname, surname) {
        const response = {
            running_num_author: running_num_author,
            author_id: author_id,
            fname: fname,
            surname: surname
        };
        console.log('return success');
        return response;
    }
    getByAuthorId(authorId) {
        console.log("Requested author_id:", authorId);
        console.log("Authors array:", this.authors);
        const author = this.authors.find(a => {
            console.log(`Comparing ${a.author_id} with ${authorId}`);
            return a.author_id === authorId;
        });
        if (!author) {
            console.log("Author not found");
            return null;
        }
        const response = {
            running_num_author: author.running_num_author,
            author_id: author.author_id,
            fname: author.fname,
            surname: author.surname,
        };
        console.log("Author found:", response);
        return response;
    }
    create(body) {
        const response = {
            running_num_author: body.running_num_author,
            author_id: body.author_id,
            fname: body.fname,
            surname: body.surname
        };
        return response;
    }
};
exports.AuthorService = AuthorService = __decorate([
    (0, common_1.Injectable)()
], AuthorService);
//# sourceMappingURL=author.service.js.map