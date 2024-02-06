import { RouteTree } from "@nestjs/core";
import { BibAuthorModule } from "bib-author/bib-author.module";

export const bib_author: RouteTree= {
    path: 'bib-author/',
    module: BibAuthorModule,
}