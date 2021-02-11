import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdEventComponent } from './upd-event.component';

describe('UpdEventComponent', () => {
  let component: UpdEventComponent;
  let fixture: ComponentFixture<UpdEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
