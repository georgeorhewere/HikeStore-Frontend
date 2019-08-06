import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { AddUserComponent } from '../add-user/add-user.component';
import {UserRepositoryService} from "../../models/repository/user.repository.service";
import { StaticdbService } from 'src/app/models/datasource/staticdb.service';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let service:UserRepositoryService = new UserRepositoryService(new StaticdbService());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent],
      providers: [
        { provide: UserRepositoryService, useValue: service }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    component.dataModel = service;
  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('user array cannot be null', () => {
    expect(component.getUsers()).toBeDefined();
  });

  it('user array can be empty', () => {
    expect(component.getUsers().length).toBeGreaterThanOrEqual(0);
  });

});
