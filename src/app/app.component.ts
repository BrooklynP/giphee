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
  private QUERY = 'Halloween';
  shouldShowSubHeader = true;
  public gifs: Array<any>;

  toggleSubHeader() {
    this.shouldShowSubHeader = !this.shouldShowSubHeader;
  }

  changeSearchQuery() {
    let stringQuery = (document.getElementById('search') as HTMLInputElement).value;
    stringQuery = stringQuery.charAt(0).toUpperCase() + stringQuery.slice(1);
    this.QUERY = stringQuery;
    this.api.searchGifs(this.QUERY, this.LIMIT).then((gifsArray) => {
      this.gifs = gifsArray.data;
      console.log(this.gifs);
    });
  }

  constructor(private http: HttpClient, public api: ApiServiceService) {
    api.searchGifs(this.QUERY, this.LIMIT).then((gifsArray) => {
      this.gifs = gifsArray.data;
      console.log(this.gifs);
    });
  }
}
