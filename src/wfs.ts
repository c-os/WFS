// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import { FileSystem } from './lib';



export class WFS {
  static readonly filesystem: FileSystem = new FileSystem();
  static init(options: any): void {
    FileSystem.init(options);
  }
  static mount() {
    //
  }
}


