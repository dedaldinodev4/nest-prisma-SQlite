import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { IFindByIdBookDTO } from './dtos/find-by-id-book.dto';

@Injectable()
export class FindByIdBookService {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: string): Promise<IFindByIdBookDTO | Error> {
    const bookExists = await this.prisma.book.findFirst({
      where: { id },
    });

    if (!bookExists) {
      throw new Error('Book does not exists.');
    }
    return bookExists;
  }
}
