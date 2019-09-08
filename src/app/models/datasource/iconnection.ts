import { Observable } from 'rxjs/internal/Observable';
import { User } from '../user';

export interface IConnection {

    PROTOCOL: string;
    PORT: number;
    baseUrl: string;
}

export interface IConnectionService extends IConnection {

    getUsers(): Observable<User[]> ;
    addUser(user: User): Observable<User>;
    getUser(id: number): Observable<User>;
    deleteUser(id: number);

}
