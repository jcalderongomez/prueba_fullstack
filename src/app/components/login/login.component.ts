import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit {
  loginData = {
    userName: '',
    password: ''
  }
  constructor( private service : AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() { 
    this.service.login(this.loginData).subscribe((data: any)=>{
      localStorage.setItem('userName',data.result.userName);
      localStorage.setItem('token_value',data.result.token);
      this.router.navigate(['/home']);
    },
    (errorData)=> Swal.fire(errorData.error.displayMessage));
  }
}
