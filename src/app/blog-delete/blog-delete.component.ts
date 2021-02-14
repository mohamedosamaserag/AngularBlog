import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { User } from '../_models/user';
import { BlogService } from '../_Services/blog.service';
import { UserService } from '../_Services/user.service';

@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})
export class BlogDeleteComponent implements OnInit {

    user!:User;
    blog: Blog = new Blog;
    //blog!:Blog;

  constructor(public blogService:BlogService, public router:Router, public ar: ActivatedRoute) { }

  deleteMyBlog(){
    this.blogService.deleteMyBlog(this.blog._id).subscribe(
      d=>{
        console.log(d);
        this.router.navigateByUrl('/myProfile');
      });
  }

  ngOnInit(): void {
    let id = this.ar.snapshot.paramMap.get('id') ?? '';
        this.blogService.getBlogById(id).subscribe(
          d =>{
            console.log(d);
            this.blog = d;
          });
      };

  }
