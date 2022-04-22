import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthProfilePageComponent } from './auth-profile-page.component';

describe('AuthProfilePageComponent', () => {
  let component: AuthProfilePageComponent;
  let fixture: ComponentFixture<AuthProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
