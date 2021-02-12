import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_Services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentDate = new Date();
  //loginData:User=new User('','','','','',this.currentDate);
  loginData:User=new User;
  constructor(public userService:UserService,public router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginData);
    this.userService.logInUser(this.loginData).subscribe(
      (a:any)=>{
        localStorage.setItem('token', a.token);
        console.log(a);
        this.router.navigateByUrl('/home');
      },
      err=>console.log(err)
    )
  }

}
