import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule } from '@angular/material/slider';
import { ProfileSetupComponent } from './profile-setup/profile-setup.component'
import { CustomMaterialModule } from '../core/material.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component'


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HeaderComponent,
    SignUpComponent,
    ProfileSetupComponent,
    WelcomePageComponent,
    ContactPageComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    CustomMaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
