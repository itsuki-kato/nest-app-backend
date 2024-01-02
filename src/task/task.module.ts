import { Module } from '@nestjs/common';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	// DIに必要.$nest gコマンドで自動記述される.
	providers: [TaskResolver, TaskService],
})
export class TaskModule {}
