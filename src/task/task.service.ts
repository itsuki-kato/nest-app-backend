import { Injectable } from '@nestjs/common';
import { Task } from './model/task.model';

// DIに必要.$nest gコマンドで自動記述される.
@Injectable()
export class TaskService {
    tasks: Task[] = [];

    getTasks(): Task[] {
        return this.tasks;
    }

    createTask(name: string, dueDate: string, description?: string): Task {
        const newTask = new Task();
        newTask.id = this.tasks.length + 1;
        newTask.name = name;
        newTask.dueDate = dueDate
        newTask.status = 'NOT_STARTED';
        newTask.description = description;

        this.tasks.push(newTask);

        return newTask;
    }
}
