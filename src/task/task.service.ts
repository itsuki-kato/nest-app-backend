import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskInput } from './dto/createTask.input';
import { UpdateTaskInput } from './dto/updateTask.input';

// DIに必要.$nest gコマンドで自動記述される.
@Injectable()
export class TaskService {
  // DIでPrismaServiceを使えるように
  constructor(private readonly prismaService: PrismaService) {}

  // タスク一覧の取得
  // DB操作は非同期処理のため戻り値はPromiseになる
  async getTasks(): Promise<Task[]> {
    return await this.prismaService.task.findMany();
  }

  // タスクの登録
  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const { name, dueDate, description } = createTaskInput;
    return await this.prismaService.task.create({
      data: {
        name,
        dueDate,
        description,
      },
    });
  }

  async updateTask(UpdateTaskInput: UpdateTaskInput): Promise<Task> {
    const { id, name, dueDate, status, description } = UpdateTaskInput;
    return await this.prismaService.task.update({
      data: {
        name,
        dueDate,
        status,
        description,
      },
      where: {
        id,
      },
    });
  }

  async deleteTask(id: number): Promise<Task> {
    return await this.prismaService.task.delete({
      where: {
        id,
      },
    });
  }
}
