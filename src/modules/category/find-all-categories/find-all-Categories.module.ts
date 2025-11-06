import { Module } from '@nestjs/common';
import { FindAllCategoriesService } from './find-all-categories.service';
import { FindAllCategoriesController } from './find-all-categories.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [FindAllCategoriesController],
  providers: [FindAllCategoriesService, PrismaService],
})
export class FindAllCategoriesModule {}
