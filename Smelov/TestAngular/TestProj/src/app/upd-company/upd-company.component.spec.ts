import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdCompanyComponent } from './upd-company.component';

describe('UpdCompanyComponent', () => {
  let component: UpdCompanyComponent;
  let fixture: ComponentFixture<UpdCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
