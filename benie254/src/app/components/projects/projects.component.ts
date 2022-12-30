import { StepperOrientation } from '@angular/material/stepper';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { 
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    
  }
  

}
