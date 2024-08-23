import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum TasksStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  priority: TaskPriority;

  @Prop({ default: TasksStatus.PENDING })
  status: TasksStatus;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
