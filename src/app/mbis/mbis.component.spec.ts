import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbisComponent } from './mbis.component';

describe('MbisComponent', () => {
  let component: MbisComponent;
  let fixture: ComponentFixture<MbisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
