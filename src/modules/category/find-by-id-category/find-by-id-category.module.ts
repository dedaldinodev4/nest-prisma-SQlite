import { Module } from '@nestjs/common';
import { FindByIdCategoryService } from './find-by-id-category.service';
import { FindByIdCategoryController } from './find-by-id-category.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [FindByIdCategoryController],
  providers: [FindByIdCategoryService, PrismaService],
})
export class FindByIdCategoryModule {}
