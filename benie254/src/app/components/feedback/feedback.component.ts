import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  likeProject(data: any){
    
  }
  commentProject(data: any){
    
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
