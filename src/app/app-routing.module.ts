import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { DashboardComponent } from './employee/dashboard/dashboard.component';
import { ChangesComponent } from './employee/changes/changes.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { ProfileNewComponent } from './employee/profile/profile-new/profile-new.component';
import { ProfileEditComponent } from './employee/profile/profile-edit/profile-edit.component';
import { ResourcesComponent } from './employee/resources/resources.component';
import { TopicDetailComponent } from './employee/resources/topic-detail/topic-detail.component';
import { SubtopicDetailComponent } from './employee/resources/topic-detail/subtopic-detail/subtopic-detail.component';
import { MessagesComponent } from './employee/messages/messages.component';
import { MessagesNewComponent } from './employee/messages/messages-new/messages-new.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminQueueComponent } from './admin/admin-queue/admin-queue.component';
import { AdminChangesComponent } from './admin/admin-changes/admin-changes.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminMessagesComponent } from './admin/admin-messages/admin-messages.component';
import { AdminEmployeeMessagesComponent } from './admin/admin-employees/admin-employee/admin-employee-messages/admin-employee-messages.component';
import { AdminEmployeesComponent } from './admin/admin-employees/admin-employees.component';
import { AdminEmployeesNewComponent } from './admin/admin-employees/admin-employees-new/admin-employees-new.component';
import { AdminEmployeeComponent } from './admin/admin-employees/admin-employee/admin-employee.component';
import { AdminEmployeeEditComponent } from './admin/admin-employees/admin-employee/admin-employee-edit/admin-employee-edit.component';
import { AdminTopicDetailComponent } from './admin/admin-resources/admin-topic-detail/admin-topic-detail.component';
import { AdminTopicEditComponent } from './admin/admin-resources/admin-topic-detail/admin-topic-edit/admin-topic-edit.component';
import { AdminResourcesComponent } from './admin/admin-resources/admin-resources.component';
import { AdminResourcesNewComponent } from './admin/admin-resources/admin-resources-new/admin-resources-new.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'},
  // Employee Panel
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: 'changes', component: ChangesComponent, pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent, pathMatch: 'full'},
  {path: 'profile/:code', component: ProfileNewComponent, pathMatch: 'full'},
  {path: 'profile/edit', component: ProfileEditComponent, pathMatch: 'full'},
  {path: 'resources', component: ResourcesComponent, pathMatch: 'full'},
  {path: 'resources/:topic', component: TopicDetailComponent, pathMatch: 'full'},
  {path: 'resources/:topic/:subtopic', component: SubtopicDetailComponent, pathMatch: 'full'},
  {path: 'messages', component: MessagesComponent, pathMatch: 'full'},
  {path: 'messages/new', component: MessagesNewComponent, pathMatch: 'full'},
  // Admin Panel
  {path: 'admin/dashboard', component: AdminDashboardComponent, pathMatch: 'full'},
  {path: 'admin/queue', component: AdminQueueComponent, pathMatch: 'full'},
  {path: 'admin/changes', component: AdminChangesComponent, pathMatch: 'full'},
  {path: 'admin/profile', component: AdminProfileComponent, pathMatch: 'full'},
  {path: 'admin/messages', component: AdminMessagesComponent, pathMatch: 'full'},
  {path: 'admin/messages/:employeeId', component: AdminEmployeeMessagesComponent, pathMatch: 'full'},
  {path: 'admin/employees', component: AdminEmployeesComponent, pathMatch: 'full'},
  {path: 'admin/employees/new', component: AdminEmployeesNewComponent, pathMatch: 'full'},
  {path: 'admin/employees/:employeeId', component: AdminEmployeeComponent, pathMatch: 'full'},
  {path: 'admin/employees/:employeeId/edit', component: AdminEmployeeEditComponent, pathMatch: 'full'},
  {path: 'admin/resources', component: AdminResourcesComponent, pathMatch: 'full'},
  {path: 'admin/resources/new', component: AdminResourcesNewComponent, pathMatch: 'full'},
  {path: 'admin/resources/:topic', component: AdminTopicDetailComponent, pathMatch: 'full'},
  {path: 'admin/resources/:topic/edit', component: AdminTopicEditComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
