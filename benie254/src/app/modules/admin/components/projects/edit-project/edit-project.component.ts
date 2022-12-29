import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { User } from '../../../classes/user/user';
import { ProjectService } from '../../../services/project/project.service';
import { StoryService } from '../../../services/story/story.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
})
export class EditProjectComponent implements OnInit {
  delConfirmed: boolean = false;
  currentUser!: User;
  @Input() selected: any
  showData: boolean = false;
  hideContent: boolean= false;
  showEdit: boolean = false;
  @Input() myList: any;
  details!: any;
  chapDetails: any;
  chapDes = new FormControl('');
  constructor(
    private service:StoryService,
    private auth:AuthService,
    private projectService:ProjectService,
  ) { }

  ngOnInit(): void {
    this.itemDetails();
    this.details = this.myList.find(this.byId);
    console.warn("det",this.details)
    // if(this.auth.currentUserValue){
    //   this.currentUser = this.auth.currentUserValue;
    // }else{
    //   !this.currentUser;
    // }
  }
  editItem(data: any){
    
  }
  byId(project){
    return project.id === this.selected;
  }
  itemDetails(){
    this.details = this.myList.find(this.byId);
    console.warn("det",this.details)
    // this.details === this.projectService.projects.id
    // Notiflix.Loading.dots('Loading...');
    
  }
  delete(){
    
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm delete',
      "Are you sure you want to delete this project? This action cannot be undone",
      "I'm sure",
      "Take me back",
      () => {
        this.delConfirmed = true;
        this.delete();
        location.reload();
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "You have cancelled the delete request. In case you did so by mistake, please make a new request.",
          'Great',
        )
        this.delConfirmed = false;
      }
    )
  }
  redirect = (): void => {
    setTimeout(() => {
      this.openForm();
    }, 250)
  }
  openForm = (): void => {
    this.showData = true;
    this.hideContent = true;
    this.showEdit = false;
  }
  reload(){
    setTimeout(() => {
      location.reload();
    }, 250)
  }
}

