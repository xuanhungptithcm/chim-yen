import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapLenhComponent } from './lap-lenh.component';

describe('LapLenhComponent', () => {
  let component: LapLenhComponent;
  let fixture: ComponentFixture<LapLenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapLenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapLenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
