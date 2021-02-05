import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-searchbody',
  templateUrl: './searchbody.component.html',
  styleUrls: ['./searchbody.component.css']
})
export class SearchbodyComponent implements OnInit {
  totalLength:any;
  page:number = 1;
  resultList: Array<any>;
  constructor(private search: SearchService) { 
    this.search.getResults().subscribe(res=>{
      if(res){
       this.resultList = res['articles'];
       this.totalLength = res.length;
     }
     },error=>{}
   )
  }

  ngOnInit(): void {
    
  }

}
