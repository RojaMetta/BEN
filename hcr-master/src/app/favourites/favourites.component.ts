import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  newsList: Array<any>;
  totalLength:any;
  page:number = 1;
  isActive : boolean;
  name: string;
  constructor(private newsService: NewsService,private auth: AuthService) {
    
   }

  ngOnInit(): void {
    this.isActive= !!this.auth.getBearerToken();
    console.log(this.isActive);
    console.log(sessionStorage);
    if(this.isActive){
      this.name = this.auth.getName();
      console.log(this.name);
    this.newsService.getfavs(this.name).subscribe(res=>{
      this.newsList = res;
    })
  }
  }

}
