import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieuKhienComponent } from './dieu-khien.component';

describe('DieuKhienComponent', () => {
  let component: DieuKhienComponent;
  let fixture: ComponentFixture<DieuKhienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieuKhienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieuKhienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
