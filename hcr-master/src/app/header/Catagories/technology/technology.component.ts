import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technologyList : Array<any>;
  name : string;
  isActive: boolean;
  constructor(private auth: AuthService,private newsService : NewsService) { }
  totalLength:any;
  page:number = 1;

  ngOnInit() {
    this.newsService.technologyNews().subscribe(response=>{
      if(response)
      {
        this.technologyList=response['articles'];
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



