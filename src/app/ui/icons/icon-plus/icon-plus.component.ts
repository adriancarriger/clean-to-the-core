/**
 * @module UiModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Plus icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/ios-plus-empty.svg)
 */
@Component({
  selector: 'app-icon-plus',
  templateUrl: './icon-plus.component.html',
  styleUrls: ['./icon-plus.component.scss']
})
export class IconPlusComponent {
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}
