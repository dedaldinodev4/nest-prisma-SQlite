import { Module } from '@nestjs/common';
import { UpdateCategoryService } from './update-category.service';
import { UpdateCategoryController } from './update-category.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [UpdateCategoryController],
  providers: [UpdateCategoryService, PrismaService],
})
export class UpdateCategoryModule {}
