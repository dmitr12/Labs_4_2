import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelStudentEventComponent } from './del-student-event.component';

describe('DelStudentEventComponent', () => {
  let component: DelStudentEventComponent;
  let fixture: ComponentFixture<DelStudentEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelStudentEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelStudentEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
