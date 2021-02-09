import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from  '@angular/common/http';
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInteceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req:any,next:any){
    let userService = this.injector.get(UserService)
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${userService.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
