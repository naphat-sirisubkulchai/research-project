import { Module } from '@nestjs/common';
import { BibAuthorService } from './bib-author.service';
import { BibAuthorController } from './bib-author.controller';

@Module({
  providers: [BibAuthorService],
  controllers: [BibAuthorController]
})
export class BibAuthorModule {}
