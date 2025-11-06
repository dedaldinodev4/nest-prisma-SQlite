import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdCategoryController } from './find-by-id-category.controller';
import { FindByIdCategoryService } from './find-by-id-category.service';

describe('FindByIdCategoryController', () => {
  let controller: FindByIdCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindByIdCategoryController],
      providers: [FindByIdCategoryService],
    }).compile();

    controller = module.get<FindByIdCategoryController>(FindByIdCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
