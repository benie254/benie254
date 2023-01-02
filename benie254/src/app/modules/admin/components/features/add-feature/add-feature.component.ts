import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { ProjectService } from '../../../services/project/project.service';

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.less']
})
export class AddFeatureComponent implements OnInit {
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
    this.projectService.postFeature(data).subscribe({
      next: (res) => {
        Notiflix.Notify.success('Added!');
      }
    })
  }
  reset(){
    const form = (<HTMLFormElement>document.getElementById('featureForm'));
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
