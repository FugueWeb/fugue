import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppPageComponent;
  let fixture: ComponentFixture<AppPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
