export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    country: string;
}

export interface IAddUser extends IUser {
    password: string;
    confirmPassword: string;
    role: ROLES.USER;
}

export enum ROLES {
    ADMIN = 1,
    USER = 2,
    STOREOWNER = 3,
}
