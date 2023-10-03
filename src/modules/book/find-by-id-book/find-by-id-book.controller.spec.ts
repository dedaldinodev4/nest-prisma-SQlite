import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdBookController } from './find-by-id-book.controller';
import { FindByIdBookService } from './find-by-id-book.service';

describe('FindByIdBookController', () => {
  let controller: FindByIdBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindByIdBookController],
      providers: [FindByIdBookService],
    }).compile();

    controller = module.get<FindByIdBookController>(FindByIdBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
