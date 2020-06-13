import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { getElement } from 'src/test-helpers';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function inputEmail(){
    return getElement(fixture,'#inputEmail')
  }
  describe('Display email input and label', () =>{
    fit('it should display the email input form and label to the user', ()=> {
      expect(inputEmail()).toBeTruthy()
    })
  })

  function inputPassword(){
    return getElement(fixture,'#inputPassword')
  }
  describe('Display password input and label', () => {
    fit('it should display the password input form and label to the user', ()=> {
      expect(inputPassword()).toBeTruthy()
    })
  })

  function rememberMeCheckBox(){
    return getElement(fixture,'#rememberMeCheckBox')
  }
  describe('rememberMeClick method', () => {
    fit('it should display the checkbox to allow the user to use the reming me feature', ()=> {
      expect(rememberMeCheckBox()).not.toBeNull()
    })
    fit('should display the remember me button to the user',() =>{
        spyOn(component,'rememberMeClick')
        const checkbox = rememberMeCheckBox().nativeElement
        checkbox.click()
        fixture.detectChanges()
        expect(component.rememberMeClick).toHaveBeenCalled()
    })

  })
  
  function getSubmitButton(){
    return getElement(fixture,'#signInButton')
  }
    describe('onSubmitClick method', ()=> {

      fit('shd display button', () => {
        expect(getSubmitButton()).not.toBeNull();
      })
      fit('it should call onSubmitClick method',() =>{
       spyOn(component, 'onSubmitClick')
        const button = getSubmitButton().nativeElement  
        button.click();
        fixture.detectChanges();
        expect(component.onSubmitClick).toHaveBeenCalled();
      })
    })
});
