import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_Services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs:Blog[]=[];
  constructor(private blogService:BlogService,private router:Router) { 
   
  }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(d=>{
      console.log(d);
      this.blogs=d;
    });
  }

}
