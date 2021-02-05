import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { SearchService } from 'src/app/search.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : boolean;
  username: string;
  query: string;
  form: any = {};
  constructor(private router: Router,private search: SearchService,private authService: AuthService) { 
    
  }

  ngOnInit() {
    this.isLoggedIn = !!this.authService.getBearerToken();

    if (this.isLoggedIn) {
      
      this.username = this.authService.getName();
    }
    console.log(this.isLoggedIn);
    console.log(this.username);
    
  }

  logout() {
    window.localStorage.clear();
    window.location.reload();
  }

  result(){
    this.search.setQuery(this.form.query);
    this.router.navigate(['search']);
  }
}