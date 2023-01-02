import { Component, OnInit } from '@angular/core';
import { MyProjectsService } from 'src/app/services/projects/my-projects.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.less']
})
export class AllProjectsComponent implements OnInit {
  imgURL = 'https://res.cloudinary.com/benie/image/upload/v1670974853/undraw_sharing_knowledge_03vp_a1zywy.svg';
  name = 'Project Title';
  shortDes = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, pariatur inci'
  longDes = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, pariatur incidunt neque autem, repudiandae expedita laboriosam asperiores itaque quod earum magnam nulla nihil quia reprehenderit illum eveniet, at excepturi optio.'
  projects: any;


  constructor(
    private projectService: MyProjectsService,
  ) { }

  ngOnInit(): void {
    this.allProjects();
  }
  back(){
    history.back();
  }
  allProjects(){
    this.projectService.getAllProjects().subscribe({
      next: (res: any) => {
        this.projects = res;
        console.warn(res);
      }
    })
  }

}
