
import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewsService {

  constructor(private httpClient : HttpClient) { }

  readNews() : Observable<Array<any>>
  {
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&apiKey=460f485949674cc3b853143ac6a7721e");
  }
  
  businessNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=460f485949674cc3b853143ac6a7721e");
  }

  entertainmentNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=460f485949674cc3b853143ac6a7721e");
  }

  generalNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=460f485949674cc3b853143ac6a7721e");
  }

  healthNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=460f485949674cc3b853143ac6a7721e");
  }

  scienceNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=460f485949674cc3b853143ac6a7721e");
  }

  sportsNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=460f485949674cc3b853143ac6a7721e");
  }
  
  technologyNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=460f485949674cc3b853143ac6a7721e");
  }
  bbcNews() : Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=460f485949674cc3b853143ac6a7721e");
  }
  topheadlinesUs():   Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&apiKey=460f485949674cc3b853143ac6a7721e");
  }

  

  
  addNews(news : any) : Observable<any>
  {
    alert(news);
  // return this.httpClient.post<any>("http://localhost:3000/sources",news);
   return this.httpClient.post<any>("http://localhost:9090/api/v1/news/addNews",news);
  }

}
