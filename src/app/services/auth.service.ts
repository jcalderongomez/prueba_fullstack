import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {UserInterface} from '../interfaces/userInterface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://localhost:44317/api/Users';
  
  constructor(private http: HttpClient,
    private router: Router) { }

  register(user: UserInterface){
    return  this.http.post(this.baseUrl+'/Register',user);
  }

  login(user: UserInterface){
    return  this.http.post(this.baseUrl+'/Login',user);
  }

  get getUsername(){
    return localStorage.getItem('userName');
  }

  get isAutenticado(){
    return !!localStorage.getItem('token_value');
  }

  logout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('token_value');
    this.router.navigate(['/login']);
  }
}
