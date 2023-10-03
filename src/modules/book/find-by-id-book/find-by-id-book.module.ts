import { Module } from '@nestjs/common';
import { FindByIdBookService } from './find-by-id-book.service';
import { FindByIdBookController } from './find-by-id-book.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [FindByIdBookController],
  providers: [FindByIdBookService, PrismaService],
})
export class FindByIdBookModule {}
