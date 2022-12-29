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
  ]
})
export class AdminModule { }
