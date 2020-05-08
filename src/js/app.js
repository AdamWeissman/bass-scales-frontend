import { Bass } from './instruments/bass.js';
import { Scale } from './theory/scale.js';

(() => {
  // Test Scales
  const another_scale = new Scale("A", "VI");
  console.log(another_scale.modeInfo);
  console.log(another_scale.parentKeyNotes);
  console.log(another_scale.notes);
  console.log(another_scale.intervals);
})()

