import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

export interface StopWatch {
  rank: number;
  lap: number;
  split: number;
}

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent {

  isStopped = true;
  isPaused = false;


  currentTime = new Date();
  stopwatchRecords: StopWatch[] = [];
  time = 0;

  timeoutHandler: any;

  private timeIntervalSubscription: Subscription;

  ngOnDestroy() {
    if (this.timeIntervalSubscription) {
      this.timeIntervalSubscription.unsubscribe();
    }
  }

  getTime() {
    // new time - old time
    this.time = new Date().getTime() - this.currentTime.getTime();
  }

  // toggle start, pause and resume buttons
  onStartPauseResume() {
    if (this.isStopped) {
      // start timer
      this.startStopwatch();
    } else if (this.isPaused) {
      // resume
      this.onResume();
    } else {
      // pause
      this.onPause();
    }
  }

  // start stopwatch
  startStopwatch() {
    this.isStopped = false;
    this.isPaused = false;

    this.currentTime = new Date();
    this.stopwatch();
  }

  // pause stopwatch
  onPause() {
    // clear interval
    this.timeIntervalSubscription.unsubscribe();
    this.isPaused = true;
  }

  // resume stopwatch
  onResume() {
    this.isPaused = false;
    this.currentTime = new Date(new Date().getTime() - this.time);
    this.stopwatch();
  }

  // stopwatch
  stopwatch() {
    if (this.isStopped || this.isPaused) {
      return;
    }
    this.timeIntervalSubscription = interval(10)
           .subscribe(x => { this.getTime(); });
  }

  // reset stopwatch
  onReset() {
    // clear timeout
    this.timeIntervalSubscription.unsubscribe();

    // reset controls
    this.isStopped = true;
    this.isPaused = false;

    // clear stopwatch records
    this.time = 0;
    this.currentTime = new Date();
    this.stopwatchRecords = [];
  }

  // add new lap
  onAddLap() {
    const newLap: StopWatch = {
      rank: this.stopwatchRecords.length + 1,
      lap: this.stopwatchRecords.length === 0 ? this.time : this.time - this.stopwatchRecords[this.stopwatchRecords.length - 1].split,
      split: this.time
    };

    this.stopwatchRecords = [
      ...this.stopwatchRecords,
      newLap
    ];
  }
}
