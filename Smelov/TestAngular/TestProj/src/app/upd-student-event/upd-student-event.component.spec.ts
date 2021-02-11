import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdStudentEventComponent } from './upd-student-event.component';

describe('UpdStudentEventComponent', () => {
  let component: UpdStudentEventComponent;
  let fixture: ComponentFixture<UpdStudentEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdStudentEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdStudentEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
