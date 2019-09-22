import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserFormGroup } from '../../components/forms/iinput-form';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
import { UserRepositoryService } from '../../models/repository/user.repository.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class UserComponent implements OnInit {


  constructor(private repository: UserRepositoryService, private activeRoute: ActivatedRoute, private router: Router) {
    const id = activeRoute.snapshot.params['id'];
    if (id) {
      this.editing = true;
      this.newUser = repository.getUser(id);
    }
  }

  form: UserFormGroup;
  newUser = new User();
  editing = false;

  formSubmitted = false;


  ngOnInit() {
    this.form = new UserFormGroup();


  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;

    if (form.valid) {
      console.log('Save User');

      try {
        if (this.editing) {
          // this.repository
          console.log('Update User');
          this.repository.updateUser(this.newUser);
        } else {
          this.repository.addUser(this.newUser);
        }
        this.router.navigateByUrl('/users');

      } catch (e) {
        console.log(e);
      }

      // this.datamodel.addUser(this.newUser);
      // this.newUserEvent.emit(this.newUser);
      // this.newUser = new User();
      // this.formSubmitted = false;
    }
  }

  cancelAdd() {
    console.log('clear form and back to user list');
    this.router.navigateByUrl('/users');
  }

}
