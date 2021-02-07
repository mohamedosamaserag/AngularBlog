import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../_models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

addBlogPhoto(blog: Blog, formData: FormData){
  return this.http.post<Blog>('https://myblogs-hanya.herokuapp.com/blogs/addphoto', {blog , formData});
}

addBlog(blog: Blog){
  return this.http.post<Blog>('https://myblogs-hanya.herokuapp.com/blogs/addblog', blog);
}

  constructor(private http: HttpClient ) { }
}
