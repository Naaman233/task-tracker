import { Injectable } from '@angular/core';
import firebase from '../firebase'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    signInUser(email,password){
      return firebase.auth()
      .signInWithEmailAndPassword(email,password)
    }

    signUpUser(data:any) {
      return firebase.auth()
      .createUserWithEmailAndPassword(data.inputEmail , data.inputPassword);
    }
}
