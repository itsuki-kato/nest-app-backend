import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './model/task.model';
import { CreateTaskInput } from './dto/createTask.input';

@Resolver()
export class TaskResolver {
    // コンストラクタでDIを定義
    constructor(private readonly taskService: TaskService) {}

    // getは@queryデコレータ.引数に戻り値の型を定義する.
    // 第二引数のnullableをitemsにすると要素が存在しない時に空配列、itemsAndListはnullを返す.
    @Query(() => [Task], { nullable: 'items' })
    getTasks(): Task[] {
        // serviceに定義した関数を呼び出し
        return this.taskService.getTasks();
    }

    // post,put,delteは@mutationデコレータ.引数に戻り値の型を定義する.
    // 関数で受け取る引数は@Argsを使う.
    @Mutation(() => Task)
    createTask(@Args('createTaskInput') CreateTaskInput: CreateTaskInput): Task {
        // serviceで定義した関数を呼び出し
        return this.taskService.createTask(CreateTaskInput);
    }
}
