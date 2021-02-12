import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Blog } from '../_models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public token:any=localStorage.getItem('token');

  constructor(private http:HttpClient,private userService:UserService) { }

  getBlogs(){
    return this.http.get('https://myblogs-hanya.herokuapp.com/blogs',{headers:{authorization:this.token}});
  }

  getBlog(){
    return this.http.get('https://myblogs-hanya.herokuapp.com/blogs/getblog',{headers:{authorization:this.token}});
  }

addBlogPhoto(blog: Blog, formData: FormData){
  return this.http.post<Blog>('https://myblogs-hanya.herokuapp.com/blogs/addphoto', {blog , formData});
}

addBlog(blog: Blog){
  return this.http.post<Blog>('https://myblogs-hanya.herokuapp.com/blogs/addblog', blog);
}

}
