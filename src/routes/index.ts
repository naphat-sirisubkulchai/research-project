import { Routes } from "@nestjs/core";
import { IndexModule } from "app/index.module";
import { author } from "./author";
import { bib } from "./bib";
import { bib_author } from "./bib-author";

export const routes: Routes = [
    {
        path: 'researchdb/', // Define your default path
        module: IndexModule, // Your controller module
        children: [author,bib,bib_author]
    },
];