import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-contentbody',
  templateUrl: './contentbody.component.html',
  styleUrls: ['./contentbody.component.css']
})
export class ContentbodyComponent implements OnInit {

  slider : Array<any>
  sliderurl : any
  slidertitle : any
  newList : Array<any>;
  imageList : Array<any>;
  bbcNews : Array<any>;
  bbcList : Array<any>;
  topheadlinesUs : Array<any>;
  headlinesUs : Array<any>;
  businessNews : Array<any>;
  businessList : Array<any>;
  entertainmentNews : Array<any>;
  entertainmentList : Array<any>;
  generalNews : Array<any>;
  generalList : Array<any>;
  healthNews : Array<any>;
  healthList : Array<any>;
  scienceNews : Array<any>;
  scienceList : Array<any>;
  sportsNews : Array<any>;
  sportsList : Array<any>;
  technologyNews : Array<any>;
  technologyList : Array<any>;
  mostrecentNews: Array<any>;
  mostrecentList: Array<any>;
  mostpopularNews: Array<any>;
  popularList: Array<any>;
  name : string;
  isActive: boolean;
  constructor(private newsService : NewsService,private auth: AuthService)
  { 
    this.newsService.readNews().subscribe(response=>{
      this.slider= response['articles'];
      this.sliderurl= this.slider[0]['urlToImage'];
      this.slidertitle = this.slider[0]['title'];
    })

  }
  ngOnInit()
  { this.isActive = !!this.auth.getBearerToken();
    console.log(this.isActive);
    if(this.isActive){
      this.name = this.auth.getName();
    }
     this.newsService.readNews().subscribe(response=>{
       if(response)
       {
         this.newList=response['articles'];
         //this.imageList = this.newList['urlToImage'].slice(0,3);
         console.log(response);
         console.log(this.newList);
       }
     },error=>{})

     this.newsService.bbcNews().subscribe(response=>{
       if(response){
         this.bbcNews=response['articles'];
          this.bbcList = this.bbcNews.slice(0,4);
       }
     })
    
    this.newsService.topheadlinesUs().subscribe(response=>{
      if(response){
        this.topheadlinesUs = response['articles'];
        this.headlinesUs = this.topheadlinesUs.slice(0,10);
      }
    })
    this.newsService.mostrecent().subscribe(response=>{
      if(response){
        this.mostrecentNews = response['articles'];
        this.mostrecentList = this.mostrecentNews.slice(0,10);
      }
    })
    this.newsService.mostpopular().subscribe(response=>{
      if(response){
        this.mostpopularNews = response['articles'];
        this.popularList = this.mostpopularNews.slice(0,10);
      }
    })

    this.newsService.businessNews().subscribe(response=>{
      if(response){
        this.businessNews = response['articles'];
        this.businessList = this.businessNews.slice(0,2);
      }
    })
    this.newsService.entertainmentNews().subscribe(response=>{
      if(response){
        this.entertainmentNews = response['articles'];
        this.entertainmentList = this.entertainmentNews.slice(0,1);
      }
    })
    this.newsService.generalNews().subscribe(response=>{
      if(response){
        this.generalNews = response['articles'];
        this.generalList = this.generalNews.slice(0,1);
      }
    })
    this.newsService.healthNews().subscribe(response=>{
      if(response){
        this.healthNews = response['articles'];
        this.healthList = this.healthNews;
      }
    })
    this.newsService.scienceNews().subscribe(response=>{
      if(response){
        this.scienceNews = response['articles'];
        this.scienceList = this.scienceNews.slice(0,2);
      }
    })
    this.newsService.sportsNews().subscribe(response=>{
      if(response){
        this.sportsNews = response['articles'];
        this.sportsList = this.sportsNews.slice(0,2);
      }
    })
    this.newsService.technologyNews().subscribe(response=>{
      if(response){
        this.technologyNews = response['articles'];
        this.technologyList = this.technologyNews.slice(0,2);
      }
    })
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
}}


