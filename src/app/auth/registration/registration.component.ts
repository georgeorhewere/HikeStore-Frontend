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
  showNotification: boolean;
  message: string = '';


  constructor(private service: AuthService) {

  }


  ngOnInit() {
    this.addUserForm = new AddUserFormGroup(this.user);
  }


  register(form) {

    this.formSubmitted = true;
    if (this.addUserForm.valid) {
      this.user = form.value;
      this.service.add(this.user).subscribe((result) => {
        
        this.message = '';

        if (result.success) {
          this.message = '<div>Success! User Registered</div><div>You will be redirected login to access your account</div>';
        } else {
          (result.data.errors as Array<any>).forEach((x) => {
            this.message +='<div>' + x.description + '</div>';
          });
        }

        this.showNotification = true;
        this.notificationTimeout();

      }, (error) => {
        console.log(error);
        this.message = 'Error! Unable to save record.';
        this.showNotification = true;
        this.notificationTimeout();
      });

    }
  }

  private notificationTimeout() {
    setTimeout(() => {
      this.showNotification = false;
    }, 5000);

  }

}
