import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeMessagesComponent } from './admin-employee-messages.component';

describe('AdminEmployeeMessagesComponent', () => {
  let component: AdminEmployeeMessagesComponent;
  let fixture: ComponentFixture<AdminEmployeeMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeeMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
