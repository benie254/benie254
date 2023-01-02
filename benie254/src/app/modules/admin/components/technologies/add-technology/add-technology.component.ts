import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { ProjectService } from '../../../services/project/project.service';

@Component({
  selector: 'app-add-technology',
  templateUrl: './add-technology.component.html',
  styleUrls: ['./add-technology.component.less']
})
export class AddTechnologyComponent implements OnInit {
  value = 1;
  dialogOpen: boolean = false;
  projects: any[] = [];
  allTechs: any[] = [];
  
  constructor(
    private projectService:ProjectService,
  ) { }

  ngOnInit(): void {
  }
  addItem(data: any){
    this.projectService.postTechnology(data).subscribe({
      next: (res) => {
        Notiflix.Notify.success('Added!');
      }
    })
  }
  reset(){
    const form = (<HTMLFormElement>document.getElementById('technologyForm'));
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