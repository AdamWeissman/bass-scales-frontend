import { Bass } from './instruments/bass.js';
import { Scale } from './theory/scale.js';

(() => {
  const myBass = new Bass(6);
  console.log(myBass.strings);

  const myScale = new Scale("C", "Aeolian");
  console.log(myScale.root);
  console.log(myScale.mode);
})()
