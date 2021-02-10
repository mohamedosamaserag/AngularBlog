import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { User } from '../_models/user';
import { BlogService } from '../_Services/blog.service';
import { UserService } from '../_Services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user!:User;
  blogs:Blog[]=[];
  blog!:Blog;
  constructor(private blogService:BlogService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.blogService.getBlog().subscribe(d=>{
      console.log(d);
      this.blogs=d;      
    });

    // this.userService.getUserByID(this.blogs[0].author).subscribe(d=>{
    //   console.log(d);
    //   this.user=d;
    // });
  }

}
