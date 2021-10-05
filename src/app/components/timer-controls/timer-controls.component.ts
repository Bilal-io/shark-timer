import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.scss']
})
export class TimerControlsComponent implements OnInit {

  @Input() isStopped: boolean;
  @Input() isPaused: boolean;
  @Input() isAlarmDisabled: boolean;
  @Input() hasAlarm: boolean = false;
  @Input() hasLap: boolean = false;

  @Output() onStartPauseResume = new EventEmitter<boolean>();
  @Output() onAddLap = new EventEmitter<boolean>();
  @Output() onReset = new EventEmitter<boolean>();
  @Output() onToggleAlarm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  // get start or pause or resume button text
  get startPauseButtonText() {
    if (this.isStopped) {
      return 'Start';
    } else if (this.isPaused) {
      return 'Resume';
    } else {
      return 'Pause';
    }
  }
}
