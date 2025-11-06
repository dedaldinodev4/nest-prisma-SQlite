import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { IUpdateCategory } from './dtos/update-category.dto';
import { Category } from '../entities/Category';

@Injectable()
export class UpdateCategoryService {
  constructor(private prisma: PrismaService) {}

  async update(id: string, data: IUpdateCategory): Promise<Category | Error> {
    const categoryExists = await this.prisma.category.findFirst({
      where: { id }
    });

    if (!categoryExists) {
      throw new Error('Category does not exists.');
    }

    const updateCategory = await this.prisma.category.update({
      data,
      where: { id }
    });
    return updateCategory;
  }
}
