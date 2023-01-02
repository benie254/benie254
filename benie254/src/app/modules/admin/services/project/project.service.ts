import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqHandlerService } from '../../helpers/requests/req-handler.service';

const api = 'http://127.0.0.1:8000/api/';
// const api = ''

@Injectable({
  providedIn: 'any'
})
export class ProjectService {
  addProj = api + 'admin/projects/add/';
  updateProj = api + 'admin/project/details/';
  allFeeds = api + 'admin/feedbacks/all/';
  feedDet = api + 'admin/feedback/details';
  allReacts = api + 'admin/reactions/all/';
  reactDet = api + 'admin/reaction/details';
  allTechs = api + 'admin/technologies/all/';
  techDet = api + 'admin/feedback/details';
  allMsgs = api + 'admin/contacts/all/';
  msgDet = api + 'admin/contact/details';

  constructor(
    private handler:ReqHandlerService,
  ) { }

  postProject(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.addProj, data);
  }
  editProject(id:number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.updateProj + id, data);
  }
  deleteProject(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.updateProj + id);
  }
  getAllTechnologies(): Observable<any>{
    return this.handler.handleGET<any>(this.allTechs);
  }
  postTechnology(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.allTechs, data);
  }
  getTechnologyDetails(): Observable<any>{
    return this.handler.handleGET<any>(this.techDet);
  }
  editTechnology(id:number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.techDet + id, data);
  }
  deleteTechnology(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.techDet + id);
  }
  getAllFeedbacks(): Observable<any>{
    return this.handler.handleGET<any>(this.allFeeds);
  }
  postFeedback(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.allFeeds, data);
  }
  getFeedbackDetails(): Observable<any>{
    return this.handler.handleGET<any>(this.feedDet);
  }
  editFeedback(id:number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.feedDet + id, data);
  }
  deleteFeedback(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.feedDet + id);
  }
  getAllReactions(): Observable<any>{
    return this.handler.handleGET<any>(this.allReacts);
  }
  postReaction(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.allReacts, data);
  }
  getReactionDetails(): Observable<any>{
    return this.handler.handleGET<any>(this.reactDet);
  }
  editReaction(id:number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.reactDet + id, data);
  }
  deleteReaction(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.reactDet + id);
  }
  getAllContacts(): Observable<any>{
    return this.handler.handleGET<any>(this.allMsgs);
  }
  postContact(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.allMsgs, data);
  }
  getContactDetails(): Observable<any>{
    return this.handler.handleGET<any>(this.msgDet);
  }
  editContact(id:number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.msgDet + id, data);
  }
  deleteContact(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.msgDet + id);
  }
}
