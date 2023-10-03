import { Module } from '@nestjs/common';
import { FindByBarCodeBookService } from './find-by-bar-code-book.service';
import { FindByBarCodeBookController } from './find-by-bar-code-book.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [FindByBarCodeBookController],
  providers: [FindByBarCodeBookService, PrismaService],
})
export class FindByBarCodeBookModule {}
