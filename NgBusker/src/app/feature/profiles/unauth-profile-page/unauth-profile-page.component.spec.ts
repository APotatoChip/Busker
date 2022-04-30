import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthProfilePageComponent } from './unauth-profile-page.component';

describe('UnauthProfilePageComponent', () => {
  let component: UnauthProfilePageComponent;
  let fixture: ComponentFixture<UnauthProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
