import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { from, Observable } from 'rxjs';
import { Blog } from '../_models/blog';
import { UserService } from './user.service';



=======
import { UserService } from './user.service';

>>>>>>> 23f537e13da1125b22c0253b9c4b32f6c2f832e9
@Injectable({
  providedIn: 'root'
})
export class BlogService {
<<<<<<< HEAD


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
=======
  public token:any=localStorage.getItem('token');

  constructor(private http:HttpClient,private userService:UserService) { }

  getBlogs(){
    return this.http.get('https://myblogs-hanya.herokuapp.com/blogs',{headers:{authorization:this.token}});
  }

  getBlog(){
    return this.http.get('https://myblogs-hanya.herokuapp.com/blogs/getblog',{headers:{authorization:this.token}});
  }
>>>>>>> 23f537e13da1125b22c0253b9c4b32f6c2f832e9
}
