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

  getUserByID(id:string){
    return this.http.get<User>('https://myblogs-hanya.herokuapp.com/users/'+id);
  }

  editUser(id:string,eUser:User){
    return this.http.patch<User>('https://myblogs-hanya.herokuapp.com/users/edit/'+id,eUser);
  }

  deleteUser(id:string){
    return this.http.delete('https://myblogs-hanya.herokuapp.com/users/delete/'+id);
  }
  logedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
  getUserByUserName(userName:string){
    return this.http.get<User[]>('https://myblogs-hanya.herokuapp.com/users/username/'+userName);
  }

  followUSer(id:string){
    return this.http.post<User[]>('https://myblogs-hanya.herokuapp.com/users/follow/',id);
  }

  unfollowUSer(id:string){
    return this.http.post<User[]>('https://myblogs-hanya.herokuapp.com/users/unfollow/',id);
  }



}
