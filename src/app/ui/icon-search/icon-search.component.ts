import { Component, HostBinding } from '@angular/core';
/**
 * Search icon from [Ionicons](http://ionicons.com/).
 * [Source](https://raw.githubusercontent.com/driftyco/ionicons/master/src/ios-search-strong.svg)
 */
@Component({
  selector: 'app-icon-search',
  templateUrl: './icon-search.component.html',
  styleUrls: ['./icon-search.component.scss']
})
export class IconSearchComponent {
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}
