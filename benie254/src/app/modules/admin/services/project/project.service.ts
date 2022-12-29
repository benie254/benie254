import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: any[] = [];

  add(data: any){
    this.projects.push(data)
    this.setObj('myProjects',JSON.stringify(data))
    console.warn("my projects",this.getObj('myProjects'))
  }
  setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
  }
  getObj = function(key) {
      return JSON.parse(this.getItem(key))
  }
  clear(){
    this.projects = [];
  }
  

  constructor() { }
}
