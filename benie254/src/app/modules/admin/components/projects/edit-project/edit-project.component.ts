import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { MyProjectsService } from 'src/app/services/projects/my-projects.service';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { User } from '../../../classes/user/user';
import { ProjectService } from '../../../services/project/project.service';

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
    private auth:AuthService,
    private projectService:MyProjectsService,
    private projectsService:ProjectService,
  ) { }

  ngOnInit(): void {
    this.itemDetails();
    // if(this.auth.currentUserValue){
    //   this.currentUser = this.auth.currentUserValue;
    // }else{
    //   !this.currentUser;
    // }
  }
  itemDetails(){
    this.projectService.getProjectDetails(this.selected).subscribe({
      next: (res) => {
        this.details = res;
      }
    })
  }
  editItem(data: any){
    this.projectsService.editProject(this.selected, data).subscribe({
      next: (res) => {
        Notiflix.Notify.success("Updated!")
      }
    })
  }
  delete(){
    this.projectsService.deleteProject(this.selected).subscribe({
      next: (res) => {
        Notiflix.Report.success(
          "Deleted!",
          "The project was deleted successfully.",
          'Great',
        )
      }
    })
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

