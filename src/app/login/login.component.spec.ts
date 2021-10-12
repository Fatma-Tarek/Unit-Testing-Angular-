import { DebugElement } from "@angular/core";
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { User } from "../user";
import { LoginComponent } from "./login.component"


describe('Login Component', () => {
  let comp: LoginComponent;
  let userMock: User;
  let fixture: ComponentFixture<LoginComponent>;

  let submitEl: DebugElement;
  let emailEl: DebugElement;
  let passwordEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:ComponentFixtureAutoDetect, useValue: true}
      ]
    })
    // comp = new LoginComponent();
    userMock = { email: 'Fatma.tarek@gmail.com', password: '123' }
    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;

    submitEl = fixture.debugElement.query(By.css('button'))
    emailEl = fixture.debugElement.query(By.css('input[type=email]'))
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'))
  });

  it('#Login() should toggle isLoggedIn', () => {
    expect(comp.isLoggedIn).toBe(false, 'false at first');
    comp.login(userMock.email, userMock.password);
    expect(comp.isLoggedIn).toBe(true, 'true after click login');
    comp.login(userMock.email, userMock.password);
    expect(comp.isLoggedIn).toBe(false, 'true after second click');
  });

  it('#login() should toggle LoginStateMessage() message', () => {
    expect(comp.loginState).toMatch(/out/);
    comp.login(userMock.email, userMock.password);
    expect(comp.loginState).toMatch(/in/)
  })

  it('Setting isLoggedIn to True must disabled button',() => {
    comp.isLoggedIn = true;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();

    comp.isLoggedIn = false;
    //fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeFalsy();
  });

  it('SubmitData must emit email and password correctly', ()=>{
    let user!:User;
    emailEl.nativeElement.value = userMock.email;
    passwordEl.nativeElement.value = userMock.password;
    comp.submitData.subscribe((data: User) => (user = data));
    submitEl.triggerEventHandler('click',null);
    expect(user.email).toBe(userMock.email)
    expect(user.password).toBe(userMock.password)
  });

  it('Testing on binding',()=>{
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1')
    console.log(h1)
   // fixture.detectChanges();
    expect(h1.textContent).toContain(comp.title)
  })
})