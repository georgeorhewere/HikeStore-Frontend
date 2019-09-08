export class UserForm
{
    label: string;
    modelProperty: string;

    constructor(label: string, property: string, value: any, validator: any) {
      //  super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }

}
