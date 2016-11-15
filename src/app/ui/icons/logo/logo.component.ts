/**
 * @module UiModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Logo icon for cleantothecore.com
 */
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}
