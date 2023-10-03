import { Test, TestingModule } from '@nestjs/testing';
import { FindAllBooksService } from './find-all-books.service';

describe('FindAllBooksService', () => {
  let service: FindAllBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllBooksService],
    }).compile();

    service = module.get<FindAllBooksService>(FindAllBooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
