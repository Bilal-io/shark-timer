import { Component, Input } from '@angular/core';
import { StopWatch } from 'src/app/pages/stopwatch/stopwatch.component';

@Component({
  selector: 'app-laps-table',
  templateUrl: './laps-table.component.html',
  styleUrls: ['./laps-table.component.scss']
})
export class LapsTableComponent {
  displayedColumns: string[] = ['rank', 'lap', 'split'];

  @Input() stopwatchRecords: StopWatch[] = [];
}
