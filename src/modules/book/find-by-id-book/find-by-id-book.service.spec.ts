import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdBookService } from './find-by-id-book.service';

describe('FindByIdBookService', () => {
  let service: FindByIdBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByIdBookService],
    }).compile();

    service = module.get<FindByIdBookService>(FindByIdBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
