import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './pages/stopwatch/stopwatch.component';
import { TimerComponent } from './pages/timer/timer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'timer',
    pathMatch: 'full'
  },
  {
    path: 'timer',
    component: TimerComponent
  },
  {
    path: 'stopwatch',
    component: StopwatchComponent
  },
  {
    path: '**',
    redirectTo: 'timer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
