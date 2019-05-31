export class User
{
    constructor(id?:number, firstName?:string,
    lastName?:string,
    email?:string,
    phoneNumber?:string)
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    id:number
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:string;

}
