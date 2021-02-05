import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  user : User=new User();
bearerToken : string;

  constructor(private router : Router,private authService: AuthService, private authenticationService : AuthService) { }

  ngOnInit() {
    if (this.authenticationService.getStatus()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit() {
    console.log(this.form);
    this.authService.validateUser(this.form.username).subscribe(
      data => {
        console.log(data['token']);
            this.authService.setName(this.form.username);
            this.bearerToken=data['token'];
            this.authenticationService.setBearerToken(this.bearerToken);
            this.authenticationService.setStatus(true);
            console.log(this.authService.getStatus());

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['contentbody']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    
    this.router.navigate(['contentbody']);
    
  }
}
