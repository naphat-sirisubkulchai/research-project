import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { routes } from 'routes';
import { AuthorModule } from './author/author.module';
import { IndexModule } from 'app/index.module';
import { BibAuthorModule } from './bib-author/bib-author.module';
import { BibController } from './bib/bib.controller';
import { BibService } from './bib/bib.service';
import { BibModule } from './bib/bib.module';

@Module({
  imports: [RouterModule.register(routes), AuthorModule, IndexModule, BibAuthorModule, BibModule],
  controllers: [BibController],
  providers: [BibService],
})
export class AppModule { }
