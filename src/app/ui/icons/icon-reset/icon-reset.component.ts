/**
 * @module SharedModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Reset icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/ios-reload.svg)
 */
@Component({
  selector: 'app-icon-reset',
  templateUrl: './icon-reset.component.html',
  styleUrls: ['./icon-reset.component.scss']
})
export class IconResetComponent {
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}
