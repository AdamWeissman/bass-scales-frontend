const twelveToneScale = [
                          "B",
                          "C", 
                          "C#/Db",
                          "D",
                          "D#/Eb",
                          "E",
                          "F",
                          "F#/Gb",
                          "G",
                          "G#/Ab",
                          "A",
                          "A#/Bb"
                        ]
const modes = {
                "Ionian": 0,
                "Dorian": 1,
                "Phrygian": 2,
                "Lydian": 3,
                "Mixolydian": 4,
                "Aeolian": 5,
                "Locrian": 6
              }

// FIXME: add const modes = {"ionian": }

export class Scale {
  constructor(root, mode){
    this._root = root;
    this._mode = mode;
  }

  // FIXME: rootChromaticInterval may need to take a note
  // FIXME: parentScaleNotes returns the wrong value. It is currently always the Ionian of the note given.
  // FIXME: modeNotes is correctly programmed, but has wrong interval because parentScaleNotes is currently wrong.
  // FIXME: if rootChromaticInterval took a note, the modeNumber could be substracted to arrive at the parentChromaticScale which is what we need.

  get rootChromaticInterval() {
    const indexOfRoot = twelveToneScale.indexOf(this._root);
    return [twelveToneScale.slice(indexOfRoot), twelveToneScale.slice(0,indexOfRoot)].flat()
  }

  get parentScaleNotes(){
    const rci = this.rootChromaticInterval;
    return [rci[0], rci[2], rci[4], rci[5], rci[7], rci[9], rci[11]];
  }

  get modeNotes() {
    const psn = this.parentScaleNotes;
    const modeNumber = modes[this._mode];
    return [psn.slice(modeNumber), psn.slice(0,modeNumber)].flat();
  }

  get root(){
    return `The root of this scale is ${this._root}`;
  }

  get mode(){
    return `The mode of this scale is ${this._mode}.`;
  }
}
