import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { LoginService } from './login.service';

describe('check for is auth', () => {
  let  auth:  AuthService;
  beforeEach(()=>{
    auth = new AuthService(new LoginService);
  })
  afterEach(()=>{
    localStorage.removeItem('token');
  })

  it('must return true if there is a token in localStorage',()=>{
    localStorage.setItem('token','Hello World');
    expect(auth.isAuth()).toBeTruthy();
  });

  it('must retun false if there is no local storage',()=>{
    localStorage.clear();
    expect(auth.isAuth()).toBeFalse();
  })

  it('must falied',()=>{
    //expect(auth.isAuth()).toBeTruthy();
    expect(auth.isAuth()).toBeFalsy();
  })

  it('return true login if user is logged',()=>{
    expect(auth.isAuthVersion2()).toBeTruthy();
  })

  it('must be false if user not logged in',() => {
    expect(!auth.isAuthVersion2()).toBeFalsy();
  })

  it('getting Fake data using spy', ()=>{
    const mySpy= jasmine.createSpyObj('',['isAuth']);
    mySpy.isAuth.and.returnValue('new data');
    expect(mySpy.isAuth()).toBe('new data', 'wrong data')
  })

  it('getting Fake data using spy2', ()=>{
    const mySpy = jasmine.createSpyObj('',['isAuth'])
    mySpy.isAuth.and.returnValue(new LoginService().isLogin() + 'x')
    expect(mySpy.isAuth()).toBe('truex','wrong data')
  })
});
