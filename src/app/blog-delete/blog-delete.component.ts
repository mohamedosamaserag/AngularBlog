import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_Services/blog.service';

@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})
export class BlogDeleteComponent implements OnInit {

    delBlog: Blog = new Blog;

  constructor(public blogService:BlogService, public router:Router) { }

  deleteMyBlog(){
    this.blogService.deleteMyBlog(this.delBlog._id).subscribe(
      d=>{
        console.log(d);
        this.router.navigateByUrl('/myProfile');
      });
  }

  ngOnInit(): void {
  }

}
