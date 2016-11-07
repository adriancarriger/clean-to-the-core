import { OpaqueToken } from '@angular/core';

export class MockWindow {
  public DISQUS: {
    reset: (params: {}) => {}
  };
  public disqus_config: () => void;
}

export const WINDOW = new OpaqueToken('window');
export const WindowProviders = [
    { provide: WINDOW, useFactory: () => (window) ? window : MockWindow }
];
