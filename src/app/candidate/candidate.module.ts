import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DocumentsComponent, DocumentDetailComponent, CandidateDashboardComponent]
})
export class CandidateModule { }
