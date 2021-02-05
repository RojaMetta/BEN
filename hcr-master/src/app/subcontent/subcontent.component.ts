import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-subcontent',
  templateUrl: './subcontent.component.html',
  styleUrls: ['./subcontent.component.css']
})
export class SubcontentComponent implements OnInit {
  newsList: Array<any>;
  search: string;
  totalLength:any;
  page:number = 1;
  constructor(private newsService: NewsService) {
    this.newsService.search(this.search).subscribe(res =>{
      this.newsList=res['articles'];
    })
   }
  ngOnInit()
  {
     

  }
}



