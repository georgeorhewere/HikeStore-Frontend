import { FormGroup, Validators } from '@angular/forms';
import { StoreFormControl } from './iinput-form';

export class ProductFormGroup extends FormGroup {

constructor() {
    super({
        Name: new StoreFormControl('Name', 'name', '', Validators.required),
        Description: new StoreFormControl('Description', 'description', '', Validators.required),
        Price: new StoreFormControl('Price', 'price', '', Validators.required),
        Category: new StoreFormControl('Category', 'category', 1, Validators.required),
        Quantity: new StoreFormControl('Quantity', 'quantity', 5, Validators.required),
        Color: new StoreFormControl('Color', 'color', '', Validators.required),
    });
}


productControls(): StoreFormControl[] {
    return Object.keys(this.controls)
        .map(k => this.controls[k] as StoreFormControl);
}

getFormValidationMessages(form: any): string[] {
    const messages: string[] = [];
    this.productControls().forEach(c => c.getValidationMessages()
        .forEach(m => messages.push(m)));
    return messages;
}
}
