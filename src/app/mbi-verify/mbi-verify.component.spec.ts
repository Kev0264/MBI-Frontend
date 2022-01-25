import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbiVerifyComponent } from './mbi-verify.component';

describe('MbiVerifyComponent', () => {
  let component: MbiVerifyComponent;
  let fixture: ComponentFixture<MbiVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbiVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbiVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
