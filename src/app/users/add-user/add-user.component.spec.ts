import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserComponent } from './add-user.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/models/user';
import { from } from 'rxjs';
import { StaticdbService } from 'src/app/models/datasource/staticdb.service';
import { HttpClient } from '@angular/common/http';
import { UserRepositoryService } from 'src/app/models/repository/user.repository.service';
import { StoreDBService } from 'src/app/models/datasource/storedb.service';




describe('AddUserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let user:User = new User();

  //set up db and client 
  let client: HttpClient;  
  let db:StaticdbService = new StaticdbService(client);

  // db model service
  let service:UserRepositoryService = new UserRepositoryService(db) ;

  
  // enviroment before each test
  
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports:[ FormsModule, ReactiveFormsModule, RouterTestingModule ],
      providers: [
        { 
        provide: UserRepositoryService, useValue: service
        },
        { provide : StoreDBService, useValue: db},       
       
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    //component.dataModel =  from([user]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should be have empty text', () => {
    /* component.dataModel.subscribe((usr)=>{
      expect(usr).toBeDefined();
      expect(usr.firstName).toBeUndefined();
    }) */
    
  });


});
