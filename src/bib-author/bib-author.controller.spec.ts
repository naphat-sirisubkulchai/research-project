import { Test, TestingModule } from '@nestjs/testing';
import { BibAuthorController } from './bib-author.controller';

describe('BibAuthorController', () => {
  let controller: BibAuthorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BibAuthorController],
    }).compile();

    controller = module.get<BibAuthorController>(BibAuthorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
