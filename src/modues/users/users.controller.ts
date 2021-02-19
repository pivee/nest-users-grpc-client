import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  OnModuleInit,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IGrpcService } from 'src/grpc.interface';
import { microserviceOptions } from 'src/grpc.options';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController implements OnModuleInit {
  private readonly logger = new Logger('UsersController');

  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return '// TODO:';
  }

  @Get()
  findAll() {
    return this.grpcService.findAllUsers({ data: '' });
  } 

  @Get(':id')
  findOne(@Param('id') id: string) {
    return '// TODO:';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return '// TODO:';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return '// TODO:';
  }
}
