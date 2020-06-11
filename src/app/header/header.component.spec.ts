import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { getElement } from 'src/test-helpers';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function getWelcomeLink(){
    return getElement(fixture, '#welcomeLink')
  }
  describe('welcome link display', () =>{
      fit('it should show the welcome link to the customer',()=>{
        expect(getWelcomeLink()).toBeTruthy();
      })
  })

  function getFAQ(){
    return getElement(fixture, '#faqLink')
  }
describe ('FAQ link display', () =>{
  fit('should display a FAQ to the customer for reviews a',() =>{
    expect (getFAQ()).toBeTruthy()
  })
})

function contactPageLink(){
  return getElement(fixture,'#contactPageLink')
}
describe('Conatct page display', () =>{
  fit('it should display the contact page to the user', ()=>{
    expect(contactPageLink()).toBeTruthy()
  })
})

function optionsLink(){
  return getElement(fixture,'#optionsLink')
}
describe('Dropdown menu link', () =>{
    fit('it should display a link to open the dropdown menu',()=>{
       expect(optionsLink()).toBeTruthy()
    })
})

function sign_in(){
  return getElement(fixture,'#signInLink')
}
describe('Sign in Link in dropdown menu',() => {
  fit('it should display the link to the sign in page to the user', () =>{
    expect(sign_in()).toBeTruthy()
  })
})

function sign_up(){
  return getElement(fixture,'#signUpLink')
}
describe('Sign up page in the dropdown menu', () => {
  fit('it should display the link to the sign up page to the user', () => {
    expect(sign_up()).toBeTruthy()
  })
})

function rightNavBar(){
  return getElement(fixture,'#displaySearch')
}
describe('Navigation bar located at the right side', () =>{
  fit('it should display the navigation bar located at the right',() =>{
    expect(rightNavBar).toBeTruthy()
  })
})

});