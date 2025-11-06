import { Module } from '@nestjs/common';
import { CreateCategoryModule } from './create-category/create-category.module';
import { FindAllCategoriesModule } from './find-all-categories/find-all-categories.module';
import { UpdateCategoryModule } from './update-category/update-category.module';
import { FindByIdCategoryModule } from './find-by-id-category/find-by-id-category.module';

@Module({
  imports: [
    CreateCategoryModule,
    FindAllCategoriesModule,
    FindByIdCategoryModule,
    UpdateCategoryModule,
  ],
})
export class CategoryModule {}
