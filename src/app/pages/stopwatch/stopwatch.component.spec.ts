import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchComponent } from './stopwatch.component';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'formatTime'})
class MockPipe implements PipeTransform {
    transform(time: number, format?: string): string {
        return time.toString();
    }
}

// tests ./stopwatch.component.ts
describe('StopwatchComponent', () => {
  let component: StopwatchComponent;
  let fixture: ComponentFixture<StopwatchComponent>;

  // configure the test bed
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StopwatchComponent, MockPipe]
    });

    // create the component
    fixture = TestBed.createComponent(StopwatchComponent);

    // get the component
    component = fixture.componentInstance;
  });

  // check if the component exist
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // check if the stopwatch is running
  it('should start the stopwatch', () => {
    expect(component.isStopped).toBeTruthy();
    component.onStartPauseResume();
    expect(component.isStopped).toBeFalsy();
  });

  // check if the stopwatch is paused
  it('should pause the stopwatch', () => {
    component.onStartPauseResume();
    expect(component.isPaused).toBeFalsy();
    component.onStartPauseResume();
    expect(component.isPaused).toBeTruthy();
  });

  // check if the stopwatch is reset
  it('should reset the stopwatch', () => {
    component.onStartPauseResume();
    expect(component.isStopped).toBeFalsy();
    component.onReset();
    expect(component.isStopped).toBeTruthy();
    expect(component.time).toEqual(0);
  });
});
