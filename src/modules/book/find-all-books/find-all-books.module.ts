import { Module } from '@nestjs/common';
import { FindAllBooksService } from './find-all-books.service';
import { FindAllBooksController } from './find-all-books.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [FindAllBooksController],
  providers: [FindAllBooksService, PrismaService],
})
export class FindAllBooksModule {}
