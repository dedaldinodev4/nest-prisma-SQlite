import { Test, TestingModule } from '@nestjs/testing';
import { FindAllCategoriesService } from './find-all-categories.service';

describe('FindAllBCategoriesService', () => {
  let service: FindAllCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllCategoriesService],
    }).compile();

    service = module.get<FindAllCategoriesService>(FindAllCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
