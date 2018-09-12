import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChangesComponent } from './admin-changes.component';

describe('AdminChangesComponent', () => {
  let component: AdminChangesComponent;
  let fixture: ComponentFixture<AdminChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
