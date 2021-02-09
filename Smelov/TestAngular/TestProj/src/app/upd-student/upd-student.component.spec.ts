import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdStudentComponent } from './upd-student.component';

describe('UpdStudentComponent', () => {
  let component: UpdStudentComponent;
  let fixture: ComponentFixture<UpdStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
