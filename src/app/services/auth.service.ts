import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginService: LoginService) { }
  isAuth(): boolean{
    //localStorage.getItem('token') return token 
    // so !! needed to convert it to boolean  
    return !!localStorage.getItem('token')
  }

  isAuthVersion2(){
    return this.loginService.isLogin();
  }

  isAuth3(userName: string, password: number): boolean{
    if(userName && password){
      return true
    }
    else{
      return false
    }
  }
}
