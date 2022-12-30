import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  imgURL = 'https://res.cloudinary.com/benie/image/upload/v1671583589/IMG_20220119_175206_763_lb4sg3-removebg-preview_dkprqf.png';
  title = 'Full-stack Software Developer';
  bio = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, velit quidem adipisci expedita sunt modi necessitatibus cupiditate quasi qui porro est hic accusantium deleniti tempore excepturi officiis ut amet incidunt.';
  experience = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, velit quidem adipisci expedita sunt modi necessitatibus cupiditate quasi qui porro est hic accusantium deleniti tempore excepturi officiis ut amet incidunt.';
  name = 'Benson Langat'

  constructor() { }

  ngOnInit(): void {
  }

}
