import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentseventComponent } from './studentsevent.component';

describe('StudentseventComponent', () => {
  let component: StudentseventComponent;
  let fixture: ComponentFixture<StudentseventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentseventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentseventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
