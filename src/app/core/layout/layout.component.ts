/**
 * @module CoreModule
 */ /** */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
  fixed: boolean;
  padding = {
    top: '20px',
    bottom: '20px'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  /**
   * When the height of `app-nav` or `app-footer` changes this adds the new height to the padding
   * of `.content-area`.
   */
  onHeightChange(item, additionalPadding, newHeight) {
    this.padding[item] = newHeight + additionalPadding + 'px';
  }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // If this route requires the nav to fixed to the top
        this.fixed = this.route.snapshot.firstChild.data['fixed'];
        document.body.scrollTop = 0;
      }
    });
  }
}
