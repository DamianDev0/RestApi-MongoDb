import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TasksStatus, TaskPriority } from '../schemas/task.schema'; // Ajusta la ruta según tu estructura

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

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
