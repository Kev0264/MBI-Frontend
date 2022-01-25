import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbiGenerateComponent } from './mbi-generate.component';

describe('MbiGenerateComponent', () => {
  let component: MbiGenerateComponent;
  let fixture: ComponentFixture<MbiGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbiGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbiGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
