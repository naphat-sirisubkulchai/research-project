import { Test, TestingModule } from '@nestjs/testing';
import { BibController } from './bib.controller';

describe('BibController', () => {
  let controller: BibController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BibController],
    }).compile();

    controller = module.get<BibController>(BibController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
