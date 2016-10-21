/* tslint:disable:no-unused-variable */
import { CoreModule } from './core.module';

describe('LayoutComponent', () => {
  it('should fail fast if a parent Module has already imported the CoreModule', () => {
    expect( () => new CoreModule(CoreModule) ).toThrow();
  });
});
