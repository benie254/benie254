import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  searchResults: any;
  searchText: any;
  title: any;

  constructor() { }

  ngOnInit(): void {
  }
  allStories(){
    this.searchResults = '';
  }
  titleValue = (text: any): void => {
    this.title = text;
  }

}
