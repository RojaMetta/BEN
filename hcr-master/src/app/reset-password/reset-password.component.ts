import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotService } from 'src/app/forgot.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-paassword',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  password: string;
  confirmPass : string;
  email: string;
  constructor(private router : Router,private forgot: ForgotService,private auth: AuthService) {
    this.email = this.forgot.getEmail();
   }

  ngOnInit(): void {
  }

  reset(){
    console.log(this.password == this.confirmPass);
    if(this.password == this.confirmPass){
      this.auth.updatePassword(this.email,this.password).subscribe(data=>{
          this.router.navigate(['contentbody']);
      },err=>{
      console.log(err);
      })
    }
  }

}
