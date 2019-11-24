import { Injectable } from '@angular/core';
import { IStoreInterface } from './istore.interface';
import { IAddUser } from '../users/iuser';
import { StoreDBService } from '../datasource/storedb.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IStoreInterface<IAddUser> {
 
  constructor(private db: StoreDBService) {

  }
  
  
  load(): void {
    throw new Error("Method not implemented.");
  }
  list(): IAddUser[] {
    throw new Error("Method not implemented.");
  }
  get(id: number): IAddUser {
    throw new Error("Method not implemented.");
  }
  
  add(instance: IAddUser): number {
    let code = 0;
    this.db.registerUser(instance).subscribe((result)=>{
      code = result.role;
    }, (error)=> {
      console.log(error.message)
    });
   return  code;
  }
  update(instance: IAddUser): void {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  paginator: import("../../components/utilities/paginator").Paginator<IAddUser>;

  
}
