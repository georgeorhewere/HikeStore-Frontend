import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';

import {UserRepositoryService} from "../../models/repository/user.repository.service";
import { StaticdbService } from 'src/app/models/datasource/staticdb.service';
import { StoreDBService } from 'src/app/models/datasource/storedb.service';
import { HttpClient } from '@angular/common/http';


import { LocationStrategy } from '@angular/common';

import * as $ from 'jquery'
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { TestRouter, MockActivatedRoute } from 'src/app/tests/mocks';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let client: HttpClient;
  
  let db:StaticdbService = new StaticdbService(client);

  let service:UserRepositoryService = new UserRepositoryService(db) ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports:[ RouterTestingModule],
      declarations: [ UserListComponent],
      providers: [
        { 
        provide: UserRepositoryService, useValue: service
        },        
        ]
    })
    .compileComponents();
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    //router = TestBed.get(Router);
    //activeRoute = TestBed.get(ActivatedRoute);

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

