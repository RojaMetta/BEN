import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  query: string;
  key : string;
  constructor(private httpClient : HttpClient) { 
    this.key = "5fb94f37f7b34356bb2d6d95f6392c83";
  }

  setQuery(value: string){
    this.query = value;
  }

  getResults(): Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/everything?q="+this.query+"&apiKey="+this.key);
  }
}
