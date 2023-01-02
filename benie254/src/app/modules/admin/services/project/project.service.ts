import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqHandlerService } from '../../helpers/requests/req-handler.service';

const api = 'http://127.0.0.1:8000/api/admin/';
// const api = ''

@Injectable({
  providedIn: 'any'
})
export class ProjectService {
  addProj = api + 'projects/add/';
  updateProj = api + 'project/update/';
  allFeeds = api + 'feedbacks/all/';
  feedDet = api + 'feedback/details/';
  allReacts = api + 'reactions/all/';
  reactDet = api + 'reaction/details/';
  allTechs = api + 'technologies/all/';
  techDet = api + 'technology/details/';
  allMsgs = api + 'contacts/all/';
  msgDet = api + 'contact/details/';
  allFeats = api + 'features/all/';
  featDet = api + 'feature/details/';

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
  getTechnologyDetails(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.techDet + id);
  }
  editTechnology(id:number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.techDet + id, data);
  }
  deleteTechnology(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.techDet + id);
  }
  getAllFeatures(): Observable<any>{
    return this.handler.handleGET<any>(this.allFeats);
  }
  postFeature(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.allFeats, data);
  }
  getFeatureDetails(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.featDet + id);
  }
  editFeature(id:number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.featDet + id, data);
  }
  deleteFeature(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.featDet + id);
  }
  getAllFeedbacks(): Observable<any>{
    return this.handler.handleGET<any>(this.allFeeds);
  }
  postFeedback(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.allFeeds, data);
  }
  getFeedbackDetails(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.feedDet + id);
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
  getReactionDetails(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.reactDet + id);
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
  getContactDetails(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.msgDet + id);
  }
  editContact(id:number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.msgDet + id, data);
  }
  deleteContact(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.msgDet + id);
  }
}
