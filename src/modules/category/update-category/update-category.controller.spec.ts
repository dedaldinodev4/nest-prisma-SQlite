import { Test, TestingModule } from '@nestjs/testing';
import { UpdateCategoryController } from './update-category.controller';
import { UpdateCategoryService } from './update-category.service';

describe('UpdateCategoryController', () => {
  let controller: UpdateCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateCategoryController],
      providers: [UpdateCategoryService],
    }).compile();

    controller = module.get<UpdateCategoryController>(UpdateCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
