import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateCategoryService } from './update-category.service';
import { IUpdateCategory } from './dtos/update-category.dto';

@Controller('categories')
export class UpdateCategoryController {
  constructor(private readonly updateCategoryService: UpdateCategoryService) {}
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: IUpdateCategory) {
    return this.updateCategoryService.update(id, data);
  }
}
