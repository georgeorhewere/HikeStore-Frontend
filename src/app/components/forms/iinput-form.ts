import { FormControl, FormGroup, Validators } from '@angular/forms';

export class StoreFormControl extends FormControl {

    label: string;
    modelProperty: string;

    constructor(label: string, property: string, value: any, validator: any) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }

    getValidationMessages() {
        const messages: string[] = [];
        if (this.errors) {
            // tslint:disable-next-line: forin
            for (const errorName in this.errors) {
                switch (errorName) {
                    case 'required':
                        messages.push(`Required`);
                        break;
                    case 'minlength':
                        messages.push(`A ${this.label} must be at least ${this.errors['minlength'].requiredLength} characters`);
                        break;
                    case 'maxlength':
                        messages.push(`A ${this.label} must be no more than ${this.errors['maxlength'].requiredLength} characters`);
                        break;
                    case 'pattern':
                        messages.push(`Invalid ${this.label} `);
                        break;
                    case 'invalidpassword':
                            messages.push(`incorrect password`);
                            break;


                }
            }
        }
        return messages;
    }
}

export class UserFormGroup extends FormGroup {
    constructor() {

        super({
            firstName: new StoreFormControl('FirstName', 'firstname', '', Validators.required),
            lastName: new StoreFormControl('LastName', 'lastname', '', Validators.required),
            email: new StoreFormControl('Email', 'email', '', Validators.required),
        });

    }
    get userControls(): StoreFormControl[] {
        return Object.keys(this.controls)
            .map(k => this.controls[k] as StoreFormControl);
    }

    getFormValidationMessages(form: any): string[] {
        const messages: string[] = [];
        this.userControls.forEach(c => c.getValidationMessages()
            .forEach(m => messages.push(m)));
        return messages;
    }
}

export class PasswordValidator {
    static checkPasswords(group: FormGroup) {
        // here we have the 'passwords' group
        return (control: FormControl): { [key: string]: any } => {
            const password = group.get('password').value;
            const confirmPassword = group.get('confirmPassword').value;
            return password === confirmPassword ? null : { invalidpassword: true };
        }
    }
}


