import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFullscreenComponent } from './toggle-fullscreen.component';

// test toggle fullscreen component and toggle button
describe('ToggleFullscreenComponent', () => {
  let component: ToggleFullscreenComponent;
  let fixture: ComponentFixture<ToggleFullscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleFullscreenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle fullscreen', () => {
    component.toggleFullScreen();
    expect(component.isFullScreen).toBeTruthy();
  });
});
