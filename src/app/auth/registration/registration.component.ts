import { Component, OnInit } from '@angular/core';
import { IAddUser } from 'src/app/models/users/iuser';
import { NgForm } from '@angular/forms';
import { AddUserFormGroup } from 'src/app/components/forms/user-form-group';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  public user: IAddUser;
  addUserForm: AddUserFormGroup;
  formSubmitted = false;


  constructor() { }


  ngOnInit() {
    this.addUserForm = new AddUserFormGroup(this.user);
  }


  register(form) {

    this.formSubmitted = true;
    if (this.addUserForm.valid) {
      this.user = form.value;

      console.log("submit");
    }



  }


}
