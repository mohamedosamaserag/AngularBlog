export class User {
  username!: string;
  password!: string;
  firstName!: string;
  LastName!: string;
  Email!: string;
  dob!: Date;
  followers!: number;
  following!: number;
  constructor(){}
  // constructor(public username: string, public password: string, public firstName: string, public LastName: string,
  //             public Email: string, public dob: Date, public followers: number= 0, public following: number= 0){}
}
