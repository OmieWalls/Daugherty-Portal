import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangesComponent } from './changes/changes.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileNewComponent } from './profile/profile-new/profile-new.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ResourcesComponent } from './resources/resources.component';
import { TopicDetailComponent } from './resources/topic-detail/topic-detail.component';
import { SubtopicDetailComponent } from './resources/topic-detail/subtopic-detail/subtopic-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesNewComponent } from './messages/messages-new/messages-new.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, ChangesComponent, ProfileComponent, ProfileNewComponent, ProfileEditComponent, ResourcesComponent, TopicDetailComponent, SubtopicDetailComponent, MessagesComponent, MessagesNewComponent]
})
export class EmployeeModule { }
