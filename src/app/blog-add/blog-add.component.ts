import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_Services/blog.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {
  myDate = new Date();
  newBlog: Blog = new Blog('', '', [''], [''], '', this.myDate, this.myDate);

  constructor(private blogService: BlogService, private router: Router) { }

  Addpost(): void{
    this.blogService.addBlog(this.newBlog).subscribe(
      a => {
        console.log(a);
        this.router.navigateByUrl('/home');
      }
    );
  }
  ngOnInit(): void {
  }

}
