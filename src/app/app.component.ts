/**
 * @module AppModule
 */ /** */
import { Component } from '@angular/core';
/**
 * @whatItDoes Returns the {@link AppComponent} view.
 * @consumers {@link AppModule}
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
