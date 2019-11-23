import { FormGroup, Validators } from '@angular/forms';
import { StoreFormControl } from './iinput-form';
import { Product } from 'src/app/models/product';

export class ProductFormGroup extends FormGroup {

constructor(private product:Product) {
    
    
    super({        
        name: new StoreFormControl('Name', 'name', product.name, Validators.required),
        description: new StoreFormControl('Description', 'description', product.description, Validators.required),
        price: new StoreFormControl('Price', 'price', product.price, 
        Validators.compose([Validators.required,Validators.pattern("^[0-9\.]+$")])),
        category: new StoreFormControl('Category', 'category', product.category, 
                            Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]) ),
        quantity: new StoreFormControl('Quantity', 'quantity', product.quantity, Validators.required),
        color: new StoreFormControl('Color', 'color', product.color, Validators.compose([Validators.required,Validators.pattern('[a-zA-Z ]*')]) ),
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
