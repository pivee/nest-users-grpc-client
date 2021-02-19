import { Observable } from 'rxjs';

export interface IGrpcService {
  findAllUsers(emptyString: IEmptyString): Observable<any>;
}

interface IEmptyString {
  data: string;
}
