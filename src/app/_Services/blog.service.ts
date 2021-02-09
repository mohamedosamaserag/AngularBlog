import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Blog } from '../_models/blog';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public token: any = localStorage.getItem('token');

addBlogPhoto(blog: Blog, formData:FormData){
  return this.http.post<Blog>('https://myblogs-hanya.herokuapp.com/blogs/addphoto',{blog ,formData}, {headers: {authorization:(this.token)}});
}

addBlog(blog: Blog){
  return this.http.post<Blog>('https://myblogs-hanya.herokuapp.com/blogs/addblog', blog, {headers: {authorization: this.token}});
}

  constructor(private http: HttpClient, private u: UserService ) { }
}
