import { Injectable } from '@nestjs/common';
import { Task } from './model/task.model';
import { CreateTaskInput } from './dto/createTask.input';

// DIに必要.$nest gコマンドで自動記述される.
@Injectable()
export class TaskService {
    tasks: Task[] = [];

    getTasks(): Task[] {
        return this.tasks;
    }

    createTask(createTaskInput: CreateTaskInput): Task {
        const { name, dueDate, description } = createTaskInput;
        
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
