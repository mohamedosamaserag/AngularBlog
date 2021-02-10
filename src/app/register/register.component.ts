import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  currentDate = new Date();
  //newUser:User = new User('','','','','',this.currentDate);
  newUser:User = new User;
  constructor(public userService:UserService,public router:Router) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.newUser);
    this.userService.addUsr(this.newUser).subscribe(
      a=>{
        console.log(a);
        this.router.navigateByUrl('/login');
      }
    )
  }

}
