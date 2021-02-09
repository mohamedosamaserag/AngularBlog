import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  addUsr(user:User){
    return this.http.post('https://myblogs-hanya.herokuapp.com/users/add',user);
  }

  logInUser(user:User){
    return this.http.post('https://myblogs-hanya.herokuapp.com/users/login',user);
  }

  logedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
