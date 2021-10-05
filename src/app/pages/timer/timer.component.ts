import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements AfterViewInit  {

  @ViewChild('alarm') alarmElementRef: ElementRef<HTMLAudioElement>;
  @ViewChild("timerinput") timerInputField: ElementRef;

  remainingTime: number = 300000;
  startTime: Date;
  isEditing: boolean = false;

  timerForm = new FormGroup({
    hours: new FormControl(0, [Validators.min(0), Validators.maxLength(3)]),
    minutes: new FormControl(5, [Validators.min(0), Validators.max(59), Validators.maxLength(2)]),
    seconds: new FormControl(0, [Validators.min(0), Validators.max(59), Validators.maxLength(2)])
  });

  isStopped = true;
  isPaused = false;

  isAlarmDisabled: boolean;
  alarm: HTMLAudioElement;

  private timeIntervalSubscription: Subscription;

  ngAfterViewInit(): void {
    this.alarm = this.alarmElementRef.nativeElement;
  }

  ngOnDestroy() {
    if (this.timeIntervalSubscription) {
      this.timeIntervalSubscription.unsubscribe();
    }
  }

  // set editing mode on
  onEdit() {
    // prevent editing until timer is reset
    if (this.isStopped && !this.isPaused) {
      this.isEditing = true;
    }
  }

  // save timer value and switch editing mode off
  onDone() {
    this.isEditing = false;
    this.setRemainingTimeFromForm();
  }

  // set remaining time value from form fields
  setRemainingTimeFromForm() {
    let remainingTime = 0;
    let hours = this.hoursFromForm;
    let minutes = this.minutesFromForm;
    let seconds = this.secondsFromForm;

    remainingTime += hours * 3600000;
    remainingTime += minutes * 60000;
    remainingTime += seconds * 1000;

    this.remainingTime = remainingTime;
  }

  // toggle start, pause and resume buttons
  onStartPauseResume() {
    if (this.isStopped) {
      // start timer
      this.startTimer();
    } else if (this.isPaused) {
      // resume
      this.onResume();
    } else {
      // pause
      this.onPause();
    }
  }

  // start timer
  startTimer() {
    this.isStopped = false;
    this.isPaused = false;

    // in case the user hits start before hitting done
    this.onDone();

    this.timer();
  }

  // pause timer
  onPause() {
    // clear interval
    this.timeIntervalSubscription.unsubscribe();
    this.isPaused = true;
  }

  // resume timer
  onResume() {
    this.isPaused = false;
    this.timer();
  }

  // timer
  timer() {
    if (this.isStopped || this.isPaused) {
      return;
    }
    this.timeIntervalSubscription = interval(10)
      .subscribe(x => {
        this.remainingTime -= 10;
        this.checkTime();
      });
  }

  // check if time is up
  checkTime() {
    // if time is up, start alarm
    if (this.remainingTime <= 0) {
      this.timeIntervalSubscription.unsubscribe();
      this.isStopped = true;
      this.isPaused = false;
      this.onStartAlarm();
    }
  }

  // Start alarm
  onStartAlarm() {
    // play alarm sound
    if (!this.isAlarmDisabled) {
      this.alarm.play();
    }
  }

  // dismiss alarm
  onDismissAlarm() {
    // stop alarm
    if (this.alarm) {
      this.alarm.pause();

      // and reset the current time
      this.onReset();
    }
  }

  // disable alarm
  onToggleAlarm() {
    // toggle alarm
    this.isAlarmDisabled = !this.isAlarmDisabled;

    // dismiss the alarm in case it's sounding
    this.onDismissAlarm();
  }

  // reset timer
  onReset() {
    // reset remaining time value
    this.setRemainingTimeFromForm();

    // clear timeout
    this.timeIntervalSubscription.unsubscribe();

    // reset controls
    this.isStopped = true;
    this.isPaused = false;
  }

  // get individual input values
  get hoursFromForm() {
    return this.timerForm.controls.hours.value;
  }
  get minutesFromForm() {
    return this.timerForm.controls.minutes.value;
  }
  get secondsFromForm() {
    return this.timerForm.controls.seconds.value;
  }
}
