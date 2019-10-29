import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly API_KEY = '1Eflrztw4KGqo6eBPk0yzQWKaQOCvv4A';
  readonly LIMIT = 50;
  readonly QUERY = 'Halloween';
  readonly API_URL = 'http://api.giphy.com/v1/gifs/';
  gifs: any;

  get(): Promise<any> {
    return this.http.get(this.API_URL + 'search?api_key=' + this.API_KEY + '&q=' + this.QUERY + '&limit=' + this.LIMIT).toPromise();
  }

  constructor(private http: HttpClient) {
    this.get().then((gifsArray) => {
      this.gifs = gifsArray.data;
      console.log(this.gifs);
    });
  }
}
