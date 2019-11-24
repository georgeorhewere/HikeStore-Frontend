import { FormGroup, Validators } from '@angular/forms';
import { IAddUser, ROLES } from 'src/app/models/users/iuser';
import { StoreFormControl, PasswordValidator } from './iinput-form';


export class AddUserFormGroup extends FormGroup {

    constructor(private user: IAddUser) {
        super({
            firstName: new StoreFormControl('First Name', 'firstname', '', Validators.required),
            lastName: new StoreFormControl('Last Name', 'lastname', '', Validators.required),
            email: new StoreFormControl('Email', 'email', '', Validators.compose([Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]), ),
            password: new StoreFormControl('Password', 'password', '', Validators.required),
            confirmPassword: new StoreFormControl('Confirm Password', 'confirmPassword', '', Validators.compose([Validators.required])),
            address: new StoreFormControl('Address', 'address', '', Validators.required),
            city: new StoreFormControl('City', 'city', '', Validators.required),
            country: new StoreFormControl('Country', 'country', '', Validators.required),
            role: new StoreFormControl('Role', 'role', ROLES.USER, Validators.required),
        });

        this.controls['confirmPassword'].setValidators(PasswordValidator.checkPasswords(this));
       

    }
}
