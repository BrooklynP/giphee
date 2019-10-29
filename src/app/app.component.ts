import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly LIMIT = 30;
  private readonly QUERY = 'Halloween';
  public gifs: Array<any>;

  constructor(private http: HttpClient, api: ApiServiceService) {
    api.searchGifs(this.QUERY, this.LIMIT).then((gifsArray) => {
      this.gifs = gifsArray.data;
      console.log(this.gifs);
    });
  }
}
