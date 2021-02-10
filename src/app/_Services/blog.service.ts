import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Blog } from '../_models/blog';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class BlogService {


 // public token: any = localStorage.getItem('token');

addBlogPhoto(formData:FormData){
  return this.http.post<Blog>('https://myblogs-hanya.herokuapp.com/blogs/addphoto',formData);
}

addBlog(newBlog: Blog){
  return this.http.post('https://myblogs-hanya.herokuapp.com/blogs/addblog', newBlog);
}

getBlog(id: string){
  return this.http.get<Blog>('https://myblogs-hanya.herokuapp.com/blogs/getblog'+id);
}

editBlog(id: string, eblog: Blog){
  return this.http.patch<Blog>('https://myblogs-hanya.herokuapp.com/blogs/'+id, eblog);
}

deleteMyBlog(id: string){
  return this.http.delete<Blog>('https://myblogs-hanya.herokuapp.com/blogs/'+id);
}

  constructor(private http: HttpClient, private u: UserService ) { }
}
