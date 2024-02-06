"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const index_module_1 = require("../app/index.module");
const author_1 = require("./author");
const bib_1 = require("./bib");
const bib_author_1 = require("./bib-author");
exports.routes = [
    {
        path: 'researchdb/',
        module: index_module_1.IndexModule,
        children: [author_1.author, bib_1.bib, bib_author_1.bib_author]
    },
];
//# sourceMappingURL=index.js.map