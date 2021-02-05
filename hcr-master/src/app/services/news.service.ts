import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import  { HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable()
export class NewsService {
  key : string;
  token: string;
  newsList: string;
  name : string;
  constructor(private httpClient : HttpClient,private tokensStorage: TokenStorageService) { 
    this.key = "5fb94f37f7b34356bb2d6d95f6392c83";
  }

  cnnNews() : Observable<Array<any>>
  {
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?sources=cnn-news&apiKey="+this.key);
  }

  readNews() : Observable<Array<any>>
  {
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&apiKey="+this.key);
  }
  
  businessNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey="+this.key);
  }

  entertainmentNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey="+this.key);
  }

  generalNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey="+this.key);
  }

  healthNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey="+this.key);
  }

  scienceNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey="+this.key);
  }

  sportsNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey="+this.key);
  }
  
  technologyNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey="+this.key);
  }
  bbcNews() : Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey="+this.key);
  }
  topheadlinesUs():   Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&apiKey="+this.key);
  }
  mostpopular():   Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/everything?q=popular&apiKey="+this.key);
  }
  mostrecent():   Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/everything?q=recent&apiKey="+this.key);
  }

  search(searchItem: string): Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/everything?q="+searchItem+"&apiKey="+this.key);
  }

 
  addNews(news : any) : Observable<any>
  {
  // return this.httpClient.post<any>("http://localhost:3000/sources",news);

  console.log(news); 
  return this.httpClient.post<any>("http://localhost:9090/api/v1/news/addNews",news);
  

}

getfavs(email: string) : Observable<Array<any>>{

  return this.httpClient.get<Array<any>>("http://localhost:9090/api/v1/news/getAllNews/"+email);
}

}
