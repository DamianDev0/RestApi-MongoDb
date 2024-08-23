import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TasksStatus, TaskPriority } from '../schemas/task.schema';

export class CreateTaskDto {
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsEnum(TaskPriority)
  readonly priority?: TaskPriority;

  @IsOptional()
  @IsEnum(TasksStatus)
  readonly status?: TasksStatus;
}
