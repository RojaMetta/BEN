import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ForgotService } from 'src/app/forgot.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  question1: string;
  question2: string;
  answer1: string;
  answer2: string;
  email: string;
  constructor(private forgot: ForgotService ,private authService: AuthService,private router: Router) { 
    this.email = this.forgot.getEmail();
    this.authService.getUser(this.email).subscribe(data =>{
      console.log(data);
      this.question1 = data.question1;
      this.question2 = data.question2;
    })
  }
  
  ngOnInit(): void {
  }

    evaluate(){
      this.authService.getUser(this.email).subscribe(data =>{
      
        if(this.answer1 == data.ans1 && this.answer2== data.ans2){
          this.router.navigate(['reset-password']);
        }
      })
    }


}
