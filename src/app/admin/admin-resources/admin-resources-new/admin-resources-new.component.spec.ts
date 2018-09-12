import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResourcesNewComponent } from './admin-resources-new.component';

describe('AdminResourcesNewComponent', () => {
  let component: AdminResourcesNewComponent;
  let fixture: ComponentFixture<AdminResourcesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResourcesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResourcesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
