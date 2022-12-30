import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.less']
})
export class ProjectDetailsComponent implements OnInit {
  projectLink: any;
  testerURL = 'https://tester.co.ke';

  constructor() { }

  ngOnInit(): void {
  }
  myLink(){
    this.copyLink(this.testerURL);
  }
  copyLink(text: any){
    localStorage.setItem('myLink',text);
    this.projectLink = localStorage.getItem('myLink')
    console.warn("my link",this.projectLink)
    this.clipBoard(this.projectLink)
  }
  clipBoard(text: any){
    navigator.clipboard.writeText(text);
    Notiflix.Notify.success('Link Copied!')    
  }
  back(){
    history.back();
  }

}
