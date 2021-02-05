import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-latest-newsarea',
  templateUrl: './latest-newsarea.component.html',
  styleUrls: ['./latest-newsarea.component.css']
})
export class LatestNewsareaComponent implements OnInit {
  newList : Array<any>;
  cnn: any;
  cnnurl: any;
  constructor(private newsService : NewsService)
  {}
  ngOnInit()
  {
     this.newsService.cnnNews().subscribe(response=>{
       if(response)
       {
         this.newList=response['articles'];
          this.cnn = this.newList[0]['tile'];
          this.cnnurl = this.newList[0]['url'];
       }
     },error=>{})
  }


}
