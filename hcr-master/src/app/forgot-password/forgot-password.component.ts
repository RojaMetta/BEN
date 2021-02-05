import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SecurityComponent } from 'src/app/security/security.component';
import {ForgotService } from 'src/app/forgot.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  constructor(private forgot : ForgotService,private router : Router,private authService: AuthService) { }

  ngOnInit(): void {
  }

  validate(){
    this.authService.getUser(this.email).subscribe(res=>{
      this.forgot.setEmail(this.email);
      this.router.navigate(['security']);
    },err=>{
      console.log("User Not Found");
    })
  }

}
