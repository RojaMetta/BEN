import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mostpopularNews: Array<any>;
  
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.mostpopular().subscribe(response=>{
      if(response){
        this.mostpopularNews = response['articles'];
        
      }
    })
  }

}
