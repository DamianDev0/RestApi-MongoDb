import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createTaskDto: CreateTaskDto) {
    const newTask = await this.tasksService.create(createTaskDto);
    return {
      status: 201,
      message: 'Task created successfully',
      data: newTask,
    };
  }

  @Get()
  async findAll() {
    return await this.tasksService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return await this.tasksService.findOne(id);
  }

  @Put('/:id')
  @HttpCode(200)
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const updateTask = await this.tasksService.update(id, updateTaskDto);
    return {
      status: 200,
      message: 'Task updated successfully',
      data: updateTask,
    };
  }
}
