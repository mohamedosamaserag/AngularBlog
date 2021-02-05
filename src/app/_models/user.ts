export class User {
    constructor(public username: string, public password: string, public firstName: string, public LastName: string,
                public Email: string, public dob: Date, public followers: number= 0, public following: number= 0){}
}
