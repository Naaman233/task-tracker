import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CustomMaterialModule} from '../../core/material.module'
import { SignUpComponent } from './sign-up.component';
import { getElement } from 'src/test-helpers';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {RouterTestingModule} from '@angular/router/testing'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'


describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports:[
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ]
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

  function getInputEmail(){
    return getElement(fixture, '#inputEmail')
  }
  describe('Input field for email',() =>{
    fit('It should display the input field for the customer',() =>{
        expect(getInputEmail).toBeTruthy()
    })
  })
  function getPassword(){
    return getElement(fixture,'#inputPassword')
  }
  describe('Input field for password',() => {
    fit('It should display the input field for the password', ()=>{ 
      expect(getPassword).toBeTruthy()
    })
  })

});
