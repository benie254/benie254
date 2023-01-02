import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { User } from '../../../classes/user/user';
import { ProjectService } from '../../../services/project/project.service';

@Component({
  selector: 'app-edit-feature',
  templateUrl: './edit-feature.component.html',
  styleUrls: ['./edit-feature.component.less']
})
export class EditFeatureComponent implements OnInit {
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
    private featService:ProjectService,
  ) { }

  ngOnInit(): void {
    this.itemDetails();
  }
  itemDetails(){
    this.featService.getFeatureDetails(this.selected).subscribe({
      next: (res) => {
        this.details = res;
      }
    })
  }
  editItem(data: any){
    this.featService.editFeature(this.selected, data).subscribe({
      next: (res) => {
        Notiflix.Notify.success("Updated!")
      }
    })
  }
  delete(){
    Notiflix.Loading.arrows('Deleting...');
    this.featService.deleteFeature(this.selected).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        Notiflix.Report.success(
          "Deleted!",
          "The feature was deleted successfully.",
          'Great',
        )
      }
    })
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm delete',
      "Are you sure you want to delete this feature? This action cannot be undone",
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

