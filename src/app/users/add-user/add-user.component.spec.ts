import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/models/user';
import { from } from 'rxjs';



describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  let user:User = new User();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserComponent ],
      imports:[ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
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
