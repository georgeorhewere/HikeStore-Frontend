export class User {

    constructor(public id?: number, firstName?: string,
    lastName?: string,
    email?: string,
   ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;

    }


    firstName: string;
    lastName: string;
    email: string;


}
