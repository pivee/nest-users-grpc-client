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
import { IUsersGrpcService } from 'src/modules/users/grpc/users-grpc.interface';
import { usersMicroserviceOptions } from 'src/modules/users/grpc/users-grpc.options';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController implements OnModuleInit {
  private readonly logger = new Logger('UsersController');

  @Client(usersMicroserviceOptions)
  private client: ClientGrpc;

  private grpcService: IUsersGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IUsersGrpcService>(
      'UsersController',
    );
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return '// TODO:';
  }

  @Get()
  findAll() {
    return this.grpcService.findAllUsers({});
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
