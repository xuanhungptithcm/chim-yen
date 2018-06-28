import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCamBienComponent } from './doc-cam-bien.component';

describe('DocCamBienComponent', () => {
  let component: DocCamBienComponent;
  let fixture: ComponentFixture<DocCamBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocCamBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocCamBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
