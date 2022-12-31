import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.less']
})
export class ProjectDetailsComponent implements OnInit {
  projectLink: any;
  repoLink: any;
  projectURL = 'https://benie.web.app/';
  repoURL = 'https://github.com/benie254/BenieWrites/'

  constructor() { }

  ngOnInit(): void {
  }
  myLink(){
    this.copyLink(this.projectURL);
  }
  copyLink(text: any){
    localStorage.setItem('myLink',text);
    this.projectLink = localStorage.getItem('myLink')
    console.warn("my link",this.projectLink)
    this.clipBoard(this.projectLink)
  }
  clipBoard(text: any){
    navigator.clipboard.writeText(text);
    Notiflix.Notify.success('Demo Link Copied!')    
  }
  myGit(){
    this.copyGit(this.repoURL);
  }
  copyGit(text: any){
    localStorage.setItem('myGit',text);
    this.repoLink = localStorage.getItem('myGit')
    this.clipGit(this.repoLink)
  }
  clipGit(text: any){
    navigator.clipboard.writeText(text);
    Notiflix.Notify.success('Repo Link Copied!')    
  }
  back(){
    history.back();
  }

}
