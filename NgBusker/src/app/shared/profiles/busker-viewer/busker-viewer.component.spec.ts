import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuskerViewerComponent } from './busker-viewer.component';

describe('BuskerViewerComponent', () => {
  let component: BuskerViewerComponent;
  let fixture: ComponentFixture<BuskerViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuskerViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuskerViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
