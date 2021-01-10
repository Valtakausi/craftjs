// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Path } from 'java.nio.file';

// Don't export internal code
require('./boot/sourcemap');

// Export (and load) public APIs
export * from './commands';
export * from './database';
export * from './events';
export * from './logging'; // Loaded early, but export the types
export * from './scheduling';
export * from './testing/index';

// Export our require to globals
// (don't export an import, we can't require the require implementation)
declare global {
  function require(id: string, relative?: string | Path): any;
}