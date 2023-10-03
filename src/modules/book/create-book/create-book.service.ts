import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ICreateBook } from './dtos/create-book.dto';

@Injectable()
export class CreateBookService {
  constructor(private prisma: PrismaService) {}

  async create(data: ICreateBook): Promise<ICreateBook | Error> {
    const bookExists = await this.prisma.book.findUnique({
      where: { bar_code: data.bar_code },
    });

    if (bookExists) {
      throw new Error('Book already exists.');
    }

    const book = await this.prisma.book.create({
      data,
    });

    return book;
  }
}
