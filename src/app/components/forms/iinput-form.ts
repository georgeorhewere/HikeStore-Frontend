import { FormControl, FormGroup, Validators } from '@angular/forms'



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
                        messages.push(`You must enter a ${this.label}`);
                        break;
                    case 'minlength':
                        messages.push(`A ${this.label} must be at least ${this.errors['minlength'].requiredLength} characters`);
                        break;
                    case 'maxlength':
                        messages.push(`A ${this.label} must be no more than ${this.errors['maxlength'].requiredLength} characters`);
                        break;
                    case 'pattern':
                        messages.push(`The ${this.label} contains illegal characters`);
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

/*export interface IInputForm {
            /*category: new UserFormControl("Category", "category", "",
                Validators.compose([Validators.required,
                    Validators.pattern("^[A-Za-z ]+$"),
                    Validators.minLength(3),
                    Validators.maxLength(10)])),
            price: new UserFormControl("Price", "price", "",
                Validators.compose([Validators.required,
                    Validators.pattern("^[0-9\.]+$")]))
}*/
