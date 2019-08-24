import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserFormGroup } from '../../forms/iinput-form'
import {User} from "../../models/user";
import {NgForm} from "@angular/forms";
import {UserRepositoryService} from "../../models/repository/user.repository.service";
import {Observable} from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class UserComponent implements OnInit {

  form:UserFormGroup;
  newUser = new User();

  /* @Output("addNewUser")
  newUserEvent = new EventEmitter<User>();

  @Input("model")
  dataModel: Observable<User>; */

  constructor(private repository:UserRepositoryService, private router:Router) { }

  ngOnInit() {
    this.form = new UserFormGroup();

    /* this.dataModel.subscribe((c)=>{
      console.log(c);
      console.log("Model value");
      this.newUser = c ;
    }); */

  }

  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;

    if (form.valid) {
      console.log("Save User")
      try{
      this.repository.addUser(this.newUser);
      this.router.navigateByUrl("/users");

      }catch(e){
            console.log(e);
      }
      
      // this.datamodel.addUser(this.newUser);
      //this.newUserEvent.emit(this.newUser);
      //this.newUser = new User();      

      //this.formSubmitted = false;
    }
  }

}
