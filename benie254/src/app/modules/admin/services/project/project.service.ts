import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqHandlerService } from '../../helpers/requests/req-handler.service';

const api = 'http://127.0.0.1:8000/api/';
// const api = ''

@Injectable({
  providedIn: 'any'
})
export class ProjectService {
  allProjs = api + 'projects/all/';
  addProj = api + 'admin/projects/add/';
  projDet = api + 'project/details/';
  updateProj = api + 'admin/project/update/';

  constructor(
    private handler:ReqHandlerService,
  ) { }

  getAllProjects(): Observable<any>{
    return this.handler.handleGET<any>(this.allProjs);
  }
  getProjectDetails(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.projDet + id);
  }
  postProject(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.addProj, data);
  }
  editProject(id:number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.updateProj + id, data);
  }
  deleteProject(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.updateProj + id);
  }


}
