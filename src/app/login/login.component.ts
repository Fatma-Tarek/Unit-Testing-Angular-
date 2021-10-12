import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn!: boolean;
  @Output() submitData: EventEmitter<User> = new EventEmitter<User>();
  title: string;
  constructor() { 
    this.isLoggedIn = false,
    this.title = 'Hello World!'
  }

  ngOnInit(): void {
  }

  login(email: string, password: string): void{
    this.isLoggedIn = !this.isLoggedIn;
    this.submitData.emit({email,password})
  }

  get loginState(): string{
    return `User is ${this.isLoggedIn? 'logged in':'logged out'}`
  }



}
