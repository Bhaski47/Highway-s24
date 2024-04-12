/// <reference types="react-scripts" />
// Create a file named "custom.d.ts" (or any other name) in your project
// custom.d.ts

declare module '*.mp4' {
    const src: string;
    export default src;
  }
  