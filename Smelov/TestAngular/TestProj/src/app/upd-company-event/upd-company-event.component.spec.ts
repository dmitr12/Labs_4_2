import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdCompanyEventComponent } from './upd-company-event.component';

describe('UpdCompanyEventComponent', () => {
  let component: UpdCompanyEventComponent;
  let fixture: ComponentFixture<UpdCompanyEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdCompanyEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdCompanyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
