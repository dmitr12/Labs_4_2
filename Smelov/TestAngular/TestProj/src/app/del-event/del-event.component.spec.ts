import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelEventComponent } from './del-event.component';

describe('DelEventComponent', () => {
  let component: DelEventComponent;
  let fixture: ComponentFixture<DelEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
