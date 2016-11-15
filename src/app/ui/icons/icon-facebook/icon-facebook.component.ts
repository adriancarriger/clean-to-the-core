/**
 * @module SharedModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Search icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/social-facebook.svg)
 */
@Component({
  selector: 'app-icon-facebook',
  templateUrl: './icon-facebook.component.html',
  styleUrls: ['./icon-facebook.component.scss']
})
export class IconFacebookComponent {
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}
