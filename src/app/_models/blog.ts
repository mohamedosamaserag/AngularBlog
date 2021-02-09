export class Blog {
    constructor(public _id: string, public title: string, public body: string, public tags: [string], public comment: [string], public photo: string,
        public likes: number= 0, public createdAt: Date, public updatedAt: Date){}
}
