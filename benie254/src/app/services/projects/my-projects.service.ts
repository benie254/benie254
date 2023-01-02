import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqHandlerService } from 'src/app/modules/admin/helpers/requests/req-handler.service';

const api = 'http://127.0.0.1:8000/api/';
// const api = ''

@Injectable({
  providedIn: 'root'
})
export class MyProjectsService {
  allProjs = api + 'projects/all/';
  projDet = api + 'project/details/';
  projFeeds = api + 'project/feedbacks/';
  projReacts = api + 'project/reactions/';
  projTechs = api + 'project/technologies/';

  constructor(
    private handler: ReqHandlerService,
  ) { }

  getAllProjects(): Observable<any>{
    return this.handler.handleGET<any>(this.allProjs);
  }
  getProjectDetails(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.projDet + id);
  }
  getProjectFeedbacks(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.projFeeds + id);
  }
  getProjectReactions(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.projReacts + id);
  }
  getProjectTechnologiess(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.projTechs + id);
  }
}
