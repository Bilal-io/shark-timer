import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';


// tests ./timer.component.ts
describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  // configure the test bed
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent]
    });

    // create the component
    fixture = TestBed.createComponent(TimerComponent);

    // get the component
    component = fixture.componentInstance;
  });

  // check if the component exist
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // check if the timer is running
  it('should start the timer', () => {
    expect(component.isStopped).toBeTruthy();
    component.onStartPauseResume();
    expect(component.isStopped).toBeFalsy();
  });

  // check if the timer is paused
  it('should pause the timer', () => {
    component.onStartPauseResume();
    expect(component.isPaused).toBeFalsy();
    component.onStartPauseResume();
    expect(component.isPaused).toBeTruthy();
  });

  // check if the timer is reset
  it('should reset the timer', () => {
    component.onStartPauseResume();
    expect(component.isStopped).toBeFalsy();
    component.onReset();
    expect(component.isStopped).toBeTruthy();
    expect(component.remainingTime).toEqual(300000);
  });
});
