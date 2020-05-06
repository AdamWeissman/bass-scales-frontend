import { Bass } from './instruments/bass.js';
import { Scale } from './theory/scale.js';

(() => {
  // Test Scales
  let myScale = new Scale("E", "Phrygian");
  console.log(myScale.root);
  console.log(myScale.parentScaleNotes);
  console.log(myScale.modeNotes);
})()
