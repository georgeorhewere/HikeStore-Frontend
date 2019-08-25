import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeComponent } from './user-home.component';
import { UserListComponent } from '../user-list/user-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { StaticdbService } from 'src/app/models/datasource/staticdb.service';
import { UserRepositoryService } from 'src/app/models/repository/user.repository.service';
import { StoreDBService } from 'src/app/models/datasource/storedb.service';

describe('UserHomeComponent', () => {
  let component: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;
  let client: HttpClient;
  
  let db:StaticdbService = new StaticdbService(client);

  let service:UserRepositoryService = new UserRepositoryService(db) ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomeComponent, UserListComponent ],
      imports:[ RouterTestingModule],
      providers: [
        { 
        provide: UserRepositoryService, useValue: service
        },             
       
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have user list >= 6', () => {
    expect(component.service.getUsers().length).toBeGreaterThanOrEqual(6);
  });

  it('should have user list component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-user-list')).toBeTruthy();
  });

});
