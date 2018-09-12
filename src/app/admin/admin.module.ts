import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminQueueComponent } from './admin-queue/admin-queue.component';
import { AdminChangesComponent } from './admin-changes/admin-changes.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { AdminEmployeeMessagesComponent } from './admin-employees/admin-employee/admin-employee-messages/admin-employee-messages.component';
import { AdminEmployeesComponent } from './admin-employees/admin-employees.component';
import { AdminEmployeesNewComponent } from './admin-employees/admin-employees-new/admin-employees-new.component';
import { AdminEmployeeComponent } from './admin-employees/admin-employee/admin-employee.component';
import { AdminEmployeeEditComponent } from './admin-employees/admin-employee/admin-employee-edit/admin-employee-edit.component';
import { AdminResourcesComponent } from './admin-resources/admin-resources.component';
import { AdminResourcesNewComponent } from './admin-resources/admin-resources-new/admin-resources-new.component';
import { AdminTopicDetailComponent } from './admin-resources/admin-topic-detail/admin-topic-detail.component';
import { AdminTopicEditComponent } from './admin-resources/admin-topic-detail/admin-topic-edit/admin-topic-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminDashboardComponent, AdminQueueComponent, AdminChangesComponent, AdminProfileComponent, AdminMessagesComponent, AdminEmployeeMessagesComponent, AdminEmployeesComponent, AdminEmployeesNewComponent, AdminEmployeeComponent, AdminEmployeeEditComponent, AdminResourcesComponent, AdminResourcesNewComponent, AdminTopicDetailComponent, AdminTopicEditComponent]
})
export class AdminModule { }
