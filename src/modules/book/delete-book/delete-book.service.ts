import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class DeleteBookService {
  constructor(private prisma: PrismaService) {}

  async delete(id: string): Promise<void> {
    const bookExists = await this.prisma.book.findFirst({
      where: { id }
    });

    if (!bookExists) {
      throw new Error('Book does not exists.');
    }

    const deleteBook = await this.prisma.book.delete({
      where: { id }
    });

    return;
  }
}


