import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService){}
  title = 'Unit-Testing';
  hello(){
    return 'Hello World';
  }

  welcome(){
    return 'welcome'
  }

  canLogin(userName: string, password: number): boolean{
    return this.authService.isAuth3(userName, password)
  }

}
