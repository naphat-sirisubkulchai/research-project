import { Test, TestingModule } from '@nestjs/testing';
import { BibService } from './bib.service';

describe('BibService', () => {
  let service: BibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BibService],
    }).compile();

    service = module.get<BibService>(BibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
