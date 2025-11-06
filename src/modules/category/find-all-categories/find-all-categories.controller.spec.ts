import { Test, TestingModule } from '@nestjs/testing';
import { FindAllCategoriesController } from './find-all-categories.controller';
import { FindAllCategoriesService } from './find-all-categories.service';

describe('FindAllCategoriesController', () => {
  let controller: FindAllCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllCategoriesController],
      providers: [FindAllCategoriesService],
    }).compile();

    controller = module.get<FindAllCategoriesController>(FindAllCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
