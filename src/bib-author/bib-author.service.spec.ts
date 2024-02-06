import { Test, TestingModule } from '@nestjs/testing';
import { BibAuthorService } from './bib-author.service';

describe('BibAuthorService', () => {
  let service: BibAuthorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BibAuthorService],
    }).compile();

    service = module.get<BibAuthorService>(BibAuthorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
