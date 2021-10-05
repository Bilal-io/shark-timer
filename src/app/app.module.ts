// core modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// local modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared-modules/material.module';

// page components
import { AppComponent } from './app.component';
import { TimerComponent } from './pages/timer/timer.component';
import { StopwatchComponent } from './pages/stopwatch/stopwatch.component';

// partial components
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimerControlsComponent } from './components/timer-controls/timer-controls.component';
import { ToggleFullscreenComponent } from './components/toggle-fullscreen/toggle-fullscreen.component';

// pipes and directives
import { FormatTimePipe } from './pipes/format-time.pipe';
import { LapsTableComponent } from './components/laps-table/laps-table.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    TimerComponent,
    StopwatchComponent,
    TimerControlsComponent,
    ToggleFullscreenComponent,
    FormatTimePipe,
    LapsTableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
