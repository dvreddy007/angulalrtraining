import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydialogmodalComponent } from './mydialogmodal.component';

describe('MydialogmodalComponent', () => {
  let component: MydialogmodalComponent;
  let fixture: ComponentFixture<MydialogmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydialogmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydialogmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
