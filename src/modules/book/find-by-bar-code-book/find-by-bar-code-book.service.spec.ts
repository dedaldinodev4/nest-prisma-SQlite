import { Test, TestingModule } from '@nestjs/testing';
import { FindByBarCodeBookService } from './find-by-bar-code-book.service';

describe('FindByBarCodeBookService', () => {
  let service: FindByBarCodeBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByBarCodeBookService],
    }).compile();

    service = module.get<FindByBarCodeBookService>(FindByBarCodeBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
