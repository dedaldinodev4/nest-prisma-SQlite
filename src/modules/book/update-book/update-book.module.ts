import { Module } from '@nestjs/common';
import { UpdateBookService } from './update-book.service';
import { UpdateBookController } from './update-book.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [UpdateBookController],
  providers: [UpdateBookService, PrismaService],
})
export class UpdateBookModule {}
