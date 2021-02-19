import { Observable } from 'rxjs';

export interface IUsersGrpcService {
  findAllUsers({}): Observable<any>;
}
