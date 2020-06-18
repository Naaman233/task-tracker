import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { getElement } from 'src/test-helpers';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function getEmailInput(){
    return getElement(fixture,'#inputEmail')
  }
  describe('InputEmail id',()=>{
    fit('it should display the input email on the sign up page',()=>{
      expect(getEmailInput).toBeTruthy()
    })
  })

  function getPassword(){
    return getElement(fixture,'#inputPassword')
  }
  describe('inputPassword id',()=>{
    fit('it should display the input input password on the sign up page',()=>{
      expect (getPassword).toBeTruthy()
    })
  })
   function getConfirmationPassword(){
     return getElement(fixture, '#inputConfirmPassword')
   }
   describe('input confirmed password', ()=>{
     fit('it should display the confirmed password field to verify user password', ()=>{
       expect(getConfirmationPassword).toBeTruthy()
     })
   })

});
