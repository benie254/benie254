import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';
import { ChangePassFormComponent } from './auth/forms/change-pass-form/change-pass-form.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ResetConfirmedComponent } from './auth/components/reset-confirmed/reset-confirmed.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { LoginFormComponent } from './auth/forms/login-form/login-form.component';
import { ResetConfirmedFormComponent } from './auth/forms/reset-confirmed-form/reset-confirmed-form.component';
import { ResetRequestFormComponent } from './auth/forms/reset-request-form/reset-request-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { AllProjectsComponent } from './components/projects/all-projects/all-projects.component';
import { EditProjectComponent } from './components/projects/edit-project/edit-project.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { AddTechnologyComponent } from './components/technologies/add-technology/add-technology.component';
import { EditTechnologyComponent } from './components/technologies/edit-technology/edit-technology.component';
import { AllTechnologiesComponent } from './components/technologies/all-technologies/all-technologies.component';
import { AllFeaturesComponent } from './components/features/all-features/all-features.component';
import { EditFeatureComponent } from './components/features/edit-feature/edit-feature.component';
import { AddFeatureComponent } from './components/features/add-feature/add-feature.component';

@NgModule({
  declarations: [
    AdminComponent,
    ChangePasswordComponent,
    ChangePassFormComponent,
    LoginComponent,
    ResetConfirmedComponent,
    ResetPasswordComponent,
    LoginFormComponent,
    ResetConfirmedFormComponent,
    ResetRequestFormComponent,
    AddProjectComponent,
    AllProjectsComponent,
    EditProjectComponent,
    AddTechnologyComponent,
    EditTechnologyComponent,
    AllTechnologiesComponent,
    AllFeaturesComponent,
    EditFeatureComponent,
    AddFeatureComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
  ]
})
export class AdminModule { }
