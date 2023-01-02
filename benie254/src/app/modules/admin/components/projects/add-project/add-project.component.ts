import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { ProjectService } from '../../../services/project/project.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

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
  allTechs: any[] = [];
  allFeats: any[] = [];
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  
  constructor(
    private projectService:ProjectService,
  ) { }

  ngOnInit(): void {
    this.getAllTechs();
    this.allFeatures();
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
  getAllTechs(){
    this.projectService.getAllTechnologies().subscribe({
      next: (res: any) => {
        this.allTechs = res;
      }
    })
  }
  allFeatures(){
    this.projectService.getAllFeatures().subscribe({
      next: (res: any) => {
        this.allFeats = res;
      }
    })
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.allTechs.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tech: any): void {
    const index = this.allTechs.indexOf(tech);

    if (index >= 0) {
      this.allTechs.splice(index, 1);
    }
  }
}