import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryService } from './create-category.service';
import { ICreateCategory } from './dtos/create-category.dto';

@Controller('categories')
export class CreateCategoryController {
  constructor(private readonly createCategoryService: CreateCategoryService) {}

  @Post()
  async create(@Body() data: ICreateCategory) {
    return this.createCategoryService.create(data);
  }
}
