import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {environment} from "../environments/environment.prod";
import {Observable} from "rxjs";
import {VideoData} from "../data_class/video-data";


@Injectable({
  providedIn: 'root'
})
export class MovieWatchSericeService {
  URL = environment.API_URL;
  link: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor( private httpClient: HttpClient ) {
    this.link="";
  }

  find(keyword: VideoData): Observable<any> {
    this.link = `${this.URL}/search_movie/`;
    return this.httpClient.post<any>(this.link, keyword, this.httpOptions);
  }


}
