import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { Book } from '../entities/Book';

@Injectable()
export class FindByIdBookService {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: string): Promise<Book | Error> {
    const bookExists = await this.prisma.book.findFirst({
      where: { id },
    });

    if (!bookExists) {
      throw new Error('Book does not exists.');
    }
    return bookExists;
  }
}
