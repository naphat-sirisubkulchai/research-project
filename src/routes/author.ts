import { RouteTree } from "@nestjs/core";
import { AuthorModule } from "author/author.module";

export const author: RouteTree= {
    path: 'author/',
    module: AuthorModule,
}