import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  entertainmentList : Array<any>;
  name : string;
  isActive: boolean;
  constructor(private newsService : NewsService,private auth: AuthService) { }
  totalLength:any;
  page:number = 1;

  ngOnInit() {
    this.isActive = !!this.auth.getBearerToken();
    if(this.isActive){
      this.name = this.auth.getName();
    }
    this.newsService.entertainmentNews().subscribe(response=>{
      if(response)
      {
        this.entertainmentList = response['articles'];
        this.totalLength=response.length;
      }

  },error=>{})
 }
 addNews(news: any): void{
  if(this.isActive){
    delete news.source;
    news.email = this.name;
    this.newsService.addNews(news).subscribe(res=>{
      if(res){
        alert("added to favourites");
      }
    },err=>{})
  }else{
  alert("Please log in first");
  }
}
}
