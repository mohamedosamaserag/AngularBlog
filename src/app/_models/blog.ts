export class Blog {
  constructor(public title: string, public body: string, public tags: [string], public comment: [string], public photo: string,
              public createdAt: Date, public updatedAt: Date){}
}
