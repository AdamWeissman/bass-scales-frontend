import { Bass } from './instruments/bass.js';
import { Scale, twelveToneScale } from './theory/scale.js';

(() => {
  // Test Scales
  for(const tone of twelveToneScale){
    let myScale = new Scale(tone, "VII");
    console.log(myScale.modeInfo);
    console.log(myScale.parentKeyNotes);
    console.log(myScale.notes);
  }
  const another_scale = new Scale("G", "III");
  console.log(another_scale.parentKeyNotes);
  console.log(another_scale.notes);
})()

