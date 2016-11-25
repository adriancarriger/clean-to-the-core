import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-skip-nav',
  templateUrl: './skip-nav.component.html',
  styleUrls: ['./skip-nav.component.scss']
})
export class SkipNavComponent implements OnInit {
  skipLabel: string;
  @ViewChild('startOfContent') startOfContent;
  startContentIndex: number = -1;
  private initalLoadComplete = false;
  constructor(
    private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.autoSkipNav();
        this.initalLoadComplete = true;
      }
    });
  }
  /**
   * Manually skip navigation
   */
  skipNavigation() {
    this.skipLabel = 'You have skipped to the main content';
    this.focusPastNav();
  }
  /**
   * Automatically skip navigation on page
   * navigation
   */
  autoSkipNav() {
    if (!this.initalLoadComplete) { return; } // Only auto skip after inital load
    this.skipLabel = 'Skipping to the main content';
    this.focusPastNav();
  }

  /**
   * Remove `#start-of-content` from the taborder
   * after it loses focus
   */
  startContentBlur() {
    this.startContentIndex = null;
  }

  /**
   * Set focus on `#start-of-content` and set the
   * tabindex to allow normal tab flow
   */
  private focusPastNav() {
    this.startContentIndex = 0;
    this.startOfContent.nativeElement.focus();
  }

}
