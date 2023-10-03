import { Test, TestingModule } from '@nestjs/testing';
import { CreateBookController } from './create-book.controller';
import { CreateBookService } from './create-book.service';

describe('CreateBookController', () => {
  let controller: CreateBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateBookController],
      providers: [CreateBookService],
    }).compile();

    controller = module.get<CreateBookController>(CreateBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
