import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaTopHeadlines, Article } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


const apiKey = environment.apiKey


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient ) { }

  getTopHeadlines():Observable<Article[]> {

   return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business`, {
    params: {
      apiKey: apiKey
    }
   }).pipe(
    map( ({ articles }) => articles )
   )

  }



}

