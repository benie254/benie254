import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { ProjectService } from '../../../services/project/project.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
})
export class AllProjectsComponent implements OnInit {
  myList: any;
  showData: boolean = false;
  hideContent: boolean= false;
  showEdit: boolean = false;
  myModel = 'Project';
  selected: any;
  stories: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private projectService:ProjectService,
  ) { }

  ngOnInit(): void {
    this.allRecords();
    // if(!this.auth.currentUserValue){
    //   this.auth.logout();
    //   this.router.navigate[('/auth')]
    // }else if(!this.auth.currentUserValue.is_staff || !this.auth.currentUserValue.is_superuser){
    //   this.auth.logout();
    //   this.router.navigate[('/auth')];
    //   Notiflix.Report.failure(
    //     'Not Permitted!',
    //     "Your log in was successful, but you don't have the permissions to access this page.",
    //     'Too Bad',
    //   )
    // }
  }
  allStories(){
    
  }
  allRecords(){
    this.myList = JSON.parse(localStorage.getItem('myProjects'))
    console.warn(this.myList)
  }
  openForm = (): void => {
    this.showData = true;
    this.hideContent = true;
    this.showEdit = false;
  }
  redirect = (): void => {
    setTimeout(() => {
      this.openForm();
    }, 250)
  }
  reset = (): void => {
    const form = (<HTMLFormElement>document.getElementById('projectForm'));
    setTimeout(() => {
      form.reset();
    }, 250)
  }
  close(){
    this.showData = false;
    this.hideContent = false;
    this.showEdit = false;
  }
  edit(){
    this.showEdit = true;
    this.hideContent = true;
  }
  copy = (text: any): void => {
    localStorage.setItem('mySavedId',text);
    this.selected = localStorage.getItem('mySavedId')
    console.warn("my id",this.selected)
  }
}
