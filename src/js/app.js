import { Bass } from './Bass.js';
import { Scale } from './Scale.js';
import { Adapter } from "./Adapter.js";
import { Display } from "./Display.js";

(() => {
  // Test Scales
  const another_scale = new Scale("A", "VI");
  console.log(another_scale.modeInfo);
  console.log(another_scale.parentKeyNotes);
  console.log(another_scale.notes);
  console.log(another_scale.intervals);
})()

