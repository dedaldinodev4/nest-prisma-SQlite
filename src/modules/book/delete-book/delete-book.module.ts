import { Module } from '@nestjs/common';
import { DeleteBookService } from './delete-book.service';
import { DeleteBookController } from './delete-book.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [DeleteBookController],
  providers: [DeleteBookService, PrismaService],
})
export class DeleteBookModule {}
