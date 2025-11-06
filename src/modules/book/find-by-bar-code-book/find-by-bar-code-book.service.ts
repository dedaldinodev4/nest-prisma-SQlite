import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { Book } from '../entities/Book';

@Injectable()
export class FindByBarCodeBookService {
  constructor(private prisma: PrismaService) { }
  async findByBarCode(bar_code: string): Promise<Book | Error> {
    const bookExists = await this.prisma.book.findUnique({
      where: { bar_code },
    });

    if (!bookExists) {
      throw new Error('Book does not exists.');
    }

    return bookExists;
  }
}
