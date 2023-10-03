import { Test, TestingModule } from '@nestjs/testing';
import { DeleteBookController } from './delete-book.controller';
import { DeleteBookService } from './delete-book.service';

describe('DeleteBookController', () => {
  let controller: DeleteBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteBookController],
      providers: [DeleteBookService],
    }).compile();

    controller = module.get<DeleteBookController>(DeleteBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
