import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerViewerComponent } from './viewer-viewer.component';

describe('ViewerViewerComponent', () => {
  let component: ViewerViewerComponent;
  let fixture: ComponentFixture<ViewerViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
