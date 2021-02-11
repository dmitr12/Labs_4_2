import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSdtudentEventComponent } from './add-sdtudent-event.component';

describe('AddSdtudentEventComponent', () => {
  let component: AddSdtudentEventComponent;
  let fixture: ComponentFixture<AddSdtudentEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSdtudentEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSdtudentEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
