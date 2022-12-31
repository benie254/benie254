import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.less']
})
export class FeedbackComponent implements OnInit {
  projectLikes: any;
  liked = 'like';
  project: any;
  values = '';
  noInput: boolean = true;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }
  likeProject(data: any){
    Notiflix.Notify.success("Project Liked!")
  }
  commentProject(data: any){
    Notiflix.Notify.success("Comment Added!")
  }
  projectReactions(id: any){
    
  }
  projectFeedbacks(id: any){
    
  }
  onKey(event: any){
    this.values = event.target.value;
    if(this.values){
      this.noInput = false;
    }
  }

}
