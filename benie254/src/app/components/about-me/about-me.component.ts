import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  back(){
    history.back();
  }

}
