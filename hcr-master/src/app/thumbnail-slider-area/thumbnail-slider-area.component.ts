import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-thumbnail-slider-area',
  templateUrl: './thumbnail-slider-area.component.html',
  styleUrls: ['./thumbnail-slider-area.component.css']
})
export class ThumbnailSliderAreaComponent implements OnInit {

  newList : Array<any>;
  constructor(private newsService : NewsService)
  {}
  ngOnInit()
  {
     this.newsService.readNews().subscribe(response=>{
       if(response)
       {
         this.newList=response['articles[0]'];
       }
     },error=>{})
  }

}
