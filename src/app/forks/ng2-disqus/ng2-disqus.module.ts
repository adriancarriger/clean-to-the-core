/**
 * @module Ng2DisqusModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';

import { Disqus } from './ng2-disqus.component';
import { WindowProviders } from './window';
/**
 * This is a fork of https://github.com/threesquared/ng2-disqus
 */
@NgModule({
    declarations: [Disqus],
    exports: [Disqus],
    providers: WindowProviders
})
export class Ng2DisqusModule {
}
