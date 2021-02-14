import { Comment } from './comment';

export class Blog {
    _id!:string;
    title!:string;
    body!:string;
    tags!:string;
    comment!:[Comment];
    photo!:string;
    likes!:number;
    createdAt!:Date;
    updatedAt!:Date;
    author!: string;
    constructor(){}
    /*constructor( public title: string, public body: string, public tags: string, public comment: [string], public photo: string,
        public likes: number= 0, public createdAt: Date, public updatedAt: Date){}*/

}
