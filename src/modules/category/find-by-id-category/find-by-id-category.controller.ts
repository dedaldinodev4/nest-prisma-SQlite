import { Controller, Get, Param } from '@nestjs/common';
import { FindByIdCategoryService } from './find-by-id-category.service';

@Controller('categories')
export class FindByIdCategoryController {
  constructor(private readonly findByIdCategoryService: FindByIdCategoryService) {}

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return this.findByIdCategoryService.findOneById(id);
  }
}
