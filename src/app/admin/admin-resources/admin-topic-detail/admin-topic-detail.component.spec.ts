import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopicDetailComponent } from './admin-topic-detail.component';

describe('AdminTopicDetailComponent', () => {
  let component: AdminTopicDetailComponent;
  let fixture: ComponentFixture<AdminTopicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTopicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTopicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
