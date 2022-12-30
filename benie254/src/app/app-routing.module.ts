import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutComponent } from './components/about/about.component';
import { AllProjectsComponent } from './components/projects/all-projects/all-projects.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'projects/all', component: AllProjectsComponent },
  { path: 'project/details/:id', component: ProjectDetailsComponent },
  { path: 'about', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
