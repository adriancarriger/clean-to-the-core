/**
 * @module CoreModule
 */ /** */
/**
 * Prevent Reimport of Core Module
 * @see [STYLE 04-11](https://angular.io/styleguide#04-12)
 */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
