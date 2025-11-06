import { Controller, Get } from '@nestjs/common';
import { FindAllCategoriesService } from './find-all-categories.service';

@Controller('categories')
export class FindAllCategoriesController {
  constructor(private readonly findAllCategoriesService: FindAllCategoriesService) {}

  @Get()
  async findAll() {
    return this.findAllCategoriesService.findAll();
  }
}
