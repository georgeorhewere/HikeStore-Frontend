import { Paginator } from 'src/app/components/utilities/paginator';
import { Observable } from 'rxjs';

export interface IStoreInterface <T> {

    load(): void;
    list(): T[];
    get(id: number): T;
    add(instance: T): Observable<any>;
    update(instance: T): void;
    delete(id: number): boolean;
    paginator: Paginator<T>;
    

}
