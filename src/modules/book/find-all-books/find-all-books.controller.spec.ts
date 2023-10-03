import { Test, TestingModule } from '@nestjs/testing';
import { FindAllBooksController } from './find-all-books.controller';
import { FindAllBooksService } from './find-all-books.service';

describe('FindAllBooksController', () => {
  let controller: FindAllBooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllBooksController],
      providers: [FindAllBooksService],
    }).compile();

    controller = module.get<FindAllBooksController>(FindAllBooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
