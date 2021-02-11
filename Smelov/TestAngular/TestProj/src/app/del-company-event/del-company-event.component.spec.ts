import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelCompanyEventComponent } from './del-company-event.component';

describe('DelCompanyEventComponent', () => {
  let component: DelCompanyEventComponent;
  let fixture: ComponentFixture<DelCompanyEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelCompanyEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelCompanyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
