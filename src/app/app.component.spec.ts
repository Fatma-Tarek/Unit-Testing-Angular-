import { ComponentFactory } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';

/*****************************************
 describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Unit-Testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Unit-Testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Unit-Testing app is running!');
  });
});
**************************************/

/*****************************************
describe("Clicking on hello function",()=>{
  it('it must return hello world! --> 2',()=>{
    const comp = new AppComponent();
    expect(comp.hello()).toBe('Hello World')
  })

  it('it must return hello world!',()=>{
    const comp = new AppComponent();
    expect(comp.hello()).toBe('Hello World')
  })

  it('welcome',()=>{
    const comp = new AppComponent();
    expect(comp.welcome()).toBe('welcome')
  })
})
**********************************/

/************************* Test Bed ******************************/
describe('App Component', () => {
  let component: AppComponent
  //fixture:  package 7lf component bel template bta3ha
  let fixture: ComponentFixture<AppComponent>
  let authService: AuthService
  beforeEach(function () {
    // TestBed.configureTestingModule({
    //   declarations: [],
    //   providers: [],
    // })

    //wrapper 3la component AppComponent
    fixture = TestBed.createComponent(AppComponent);
    //need instance of this component 
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService)
  });

  it('Should create App component', () => {
    expect(component).toBeTruthy();
  });

  it('should have title unit testing', () => {
    expect(component.title).toEqual('Unit-Testing');
  })

  it('can Login', ()=>{
    expect(component.canLogin("fatma",123)).toBeTruthy();
    expect(component.canLogin("",123)).toBeFalsy();
  })
})