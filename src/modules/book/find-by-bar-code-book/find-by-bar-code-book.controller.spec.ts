import { Test, TestingModule } from '@nestjs/testing';
import { FindByBarCodeBookController } from './find-by-bar-code-book.controller';
import { FindByBarCodeBookService } from './find-by-bar-code-book.service';

describe('FindByBarCodeBookController', () => {
  let controller: FindByBarCodeBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindByBarCodeBookController],
      providers: [FindByBarCodeBookService],
    }).compile();

    controller = module.get<FindByBarCodeBookController>(FindByBarCodeBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
