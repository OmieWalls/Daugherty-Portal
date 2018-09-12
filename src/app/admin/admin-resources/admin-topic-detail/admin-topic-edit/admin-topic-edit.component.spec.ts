import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopicEditComponent } from './admin-topic-edit.component';

describe('AdminTopicEditComponent', () => {
  let component: AdminTopicEditComponent;
  let fixture: ComponentFixture<AdminTopicEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTopicEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTopicEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
