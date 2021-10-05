import { Component, HostListener, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-toggle-fullscreen',
  templateUrl: './toggle-fullscreen.component.html',
  styleUrls: ['./toggle-fullscreen.component.scss']
})
export class ToggleFullscreenComponent {

  isFullScreen = false;

  // toggle full screen
  toggleFullScreen() {
    if (this.isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      const docElm = document.documentElement;
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      }
    }
    this.isFullScreen = !this.isFullScreen;
  }

  // subscribe to full screen enter and exit events
  @HostListener('document:fullscreenchange', ['$event'])
  onFullScreenChange(event: Event) {
    this.isFullScreen = (
      document.fullscreenElement
    ) !== null;
  }
}
