"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const routes_1 = require("./routes");
const author_module_1 = require("./author/author.module");
const index_module_1 = require("./app/index.module");
const bib_author_module_1 = require("./bib-author/bib-author.module");
const bib_controller_1 = require("./bib/bib.controller");
const bib_service_1 = require("./bib/bib.service");
const bib_module_1 = require("./bib/bib.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [core_1.RouterModule.register(routes_1.routes), author_module_1.AuthorModule, index_module_1.IndexModule, bib_author_module_1.BibAuthorModule, bib_module_1.BibModule],
        controllers: [bib_controller_1.BibController],
        providers: [bib_service_1.BibService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map