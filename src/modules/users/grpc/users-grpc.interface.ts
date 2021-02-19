import { Observable } from 'rxjs';
import { CreateUserDto } from '../dto/create-user.dto';

export interface IUsersGrpcService {
  createUser(user: CreateUserDto): Observable<any>;
  findAllUsers({}): Observable<any>;
}
