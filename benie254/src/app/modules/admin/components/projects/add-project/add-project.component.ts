import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { ProjectService } from '../../../services/project/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
})
export class AddProjectComponent implements OnInit {
  @Input() stories: any;
  @Input() dialogOp: boolean = false;
  value = 1;
  dialogOpen: boolean = false;
  projects: any[] = [];

  constructor(
    private projectService:ProjectService,
  ) { }

  ngOnInit(): void {
  }
  addItem(data: any){
    this.projectService.postProject(data).subscribe({
      next: (res) => {
        Notiflix.Notify.success('Added!');
      }
    })
  }
  reset(){
    const form = (<HTMLFormElement>document.getElementById('projectForm'));
    setTimeout(() => {
      form.reset();
    }, 250)
  }
  reload(){
    setTimeout(() => {
      location.reload();
    }, 250)
  }
}