import { Module } from '@nestjs/common';
import { CreateCategoryService } from './create-category.service';
import { CreateCategoryController } from './create-category.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CreateCategoryController],
  providers: [CreateCategoryService, PrismaService],
})
export class CreateCategoryModule {}
