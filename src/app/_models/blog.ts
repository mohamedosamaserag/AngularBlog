export class Blog {
<<<<<<< HEAD
    _id!:string;
    title!:string;
    body!:string;
    tags!:string;
    comment!:[string];
    photo!:string;
    likes!:number;
    createdAt!:Date;
    updatedAt!:Date;
    constructor(){}
    /*constructor( public title: string, public body: string, public tags: string, public comment: [string], public photo: string,
        public likes: number= 0, public createdAt: Date, public updatedAt: Date){}*/
=======
  constructor(public title: string, public body: string, public tags: [string], public comment: [string], public photo: string,
              public author:string,public createdAt: Date, public updatedAt: Date){}
>>>>>>> 23f537e13da1125b22c0253b9c4b32f6c2f832e9
}
