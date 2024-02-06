import { RouteTree } from "@nestjs/core";
import { BibModule } from "bib/bib.module";

export const bib: RouteTree= {
    path: 'bib/',
    module: BibModule,
}