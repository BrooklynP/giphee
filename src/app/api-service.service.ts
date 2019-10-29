import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private readonly API_URL = 'http://api.giphy.com/v1/gifs/';
  private readonly API_KEY = '1Eflrztw4KGqo6eBPk0yzQWKaQOCvv4A';

  constructor(public http: HttpClient) { }

  get(url: string, data?: any): Promise<any> {
    return this.http.get(url, data).toPromise();
  }

  searchGifs(query: string, limit: number): Promise<any> {
    return this.get(this.API_URL + 'search?api_key=' + this.API_KEY + '&q=' + query + '&limit=' + limit);
  }
}
