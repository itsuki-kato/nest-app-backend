import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task as TaskModel } from './model/task.model';
import { CreateTaskInput } from './dto/createTask.input';
import { Task } from '@prisma/client';
import { UpdateTaskInput } from './dto/updateTask.input';

@Resolver()
export class TaskResolver {
  // コンストラクタでDIを定義
  constructor(private readonly taskService: TaskService) {}

  // getは@queryデコレータ.引数に戻り値の型を定義する.
  // 第二引数のnullableをitemsにすると要素が存在しない時に空配列、itemsAndListはnullを返す.
  @Query(() => [TaskModel], { nullable: 'items' })
  async getTasks(): Promise<Task[]> {
    // serviceに定義した関数を呼び出し
    return await this.taskService.getTasks();
  }

  // post,put,delteは@mutationデコレータ.引数に戻り値の型を定義する.
  // 関数で受け取る引数は@Argsを使う.
  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskInput') CreateTaskInput: CreateTaskInput,
  ): Promise<Task> {
    // serviceで定義した関数を呼び出し
    return await this.taskService.createTask(CreateTaskInput);
  }

  @Mutation(() => TaskModel)
  async updateTask(
    @Args('updateTaskInput') UpdateTaskInput: UpdateTaskInput,
  ): Promise<TaskModel> {
    return await this.taskService.updateTask(UpdateTaskInput);
  }

  // TypeScriptのnumber型をGraphQLのInt型にキャストする必要がある
  @Mutation(() => TaskModel)
  async deleteTask(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<TaskModel> {
    return await this.taskService.deleteTask(id);
  }
}
