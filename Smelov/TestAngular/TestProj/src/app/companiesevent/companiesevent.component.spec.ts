import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanieseventComponent } from './companiesevent.component';

describe('CompanieseventComponent', () => {
  let component: CompanieseventComponent;
  let fixture: ComponentFixture<CompanieseventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanieseventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanieseventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
