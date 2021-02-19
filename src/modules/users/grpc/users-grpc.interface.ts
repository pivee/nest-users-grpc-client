import { Observable } from 'rxjs';

export interface IUsersGrpcService {
  findAllUsers(emptyString: IEmptyString): Observable<any>;
}

interface IEmptyString {
  data: string;
}
