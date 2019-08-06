import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeComponent } from './user-home.component';
import { UserListComponent } from '../user-list/user-list.component';

describe('UserHomeComponent', () => {
  let component: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomeComponent, UserListComponent ]
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
