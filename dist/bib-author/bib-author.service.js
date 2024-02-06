"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibAuthorService = void 0;
const common_1 = require("@nestjs/common");
let BibAuthorService = exports.BibAuthorService = class BibAuthorService {
    get(running_bib, running_author) {
        const response = {
            running_bib: running_bib,
            running_author: running_author
        };
        return response;
    }
    create(body) {
        const response = {
            running_bib: body.running_bib,
            running_author: body.running_author
        };
        return response;
    }
};
exports.BibAuthorService = BibAuthorService = __decorate([
    (0, common_1.Injectable)()
], BibAuthorService);
//# sourceMappingURL=bib-author.service.js.map