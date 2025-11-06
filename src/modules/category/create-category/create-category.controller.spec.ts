import { Test, TestingModule } from '@nestjs/testing';
import { CreateCategoryController } from './create-category.controller';
import { CreateCategoryService } from './create-category.service';

describe('CreateCategoryController', () => {
  let controller: CreateCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateCategoryController],
      providers: [CreateCategoryService],
    }).compile();

    controller = module.get<CreateCategoryController>(CreateCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
