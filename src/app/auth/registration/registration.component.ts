import { Component, OnInit } from '@angular/core';
import { IAddUser } from 'src/app/models/users/iuser';
import { NgForm } from '@angular/forms';
import { AddUserFormGroup } from 'src/app/components/forms/user-form-group';
import { StoreService } from 'src/app/models/repository/store.service';
import { AuthService } from 'src/app/models/repository/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  public user: IAddUser;
  addUserForm: AddUserFormGroup;
  formSubmitted = false;


  constructor(private service : AuthService) {

   }


  ngOnInit() {
    this.addUserForm = new AddUserFormGroup(this.user);
  }


  register(form) {

    this.formSubmitted = true;
    if (this.addUserForm.valid) {
      this.user = form.value;
      this.service.add(this.user);

      console.log("submit");
    }



  }


}
