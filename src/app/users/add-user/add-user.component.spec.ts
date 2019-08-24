import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './add-user.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/models/user';
import { from } from 'rxjs';



describe('AddUserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let user:User = new User();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports:[ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.dataModel =  from([user]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should be have empty text', () => {
    component.dataModel.subscribe((usr)=>{
      expect(usr).toBeDefined();
      expect(usr.firstName).toBeUndefined();
    })
    
  });


});
