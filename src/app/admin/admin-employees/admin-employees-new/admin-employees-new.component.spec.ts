import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeesNewComponent } from './admin-employees-new.component';

describe('AdminEmployeesNewComponent', () => {
  let component: AdminEmployeesNewComponent;
  let fixture: ComponentFixture<AdminEmployeesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
