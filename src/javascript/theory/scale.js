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

const modeHalfSteps = {
                        "Ionian": 0,
                        "Dorian": 2,
                        "Phrygian": 4,
                        "Lydian": 5,
                        "Mixolydian": 7,
                        "Aeolian": 9,
                        "Locrian": 11
                      }

// FIXME: add const modes = {"ionian": }

export class Scale {
  constructor(root, mode){
    this._root = root;
    this._mode = mode;
  }

  get keyChromaticInterval() {
    const indexOfRoot = twelveToneScale.indexOf(this._root) - modeHalfSteps[this._mode];
    return [twelveToneScale.slice(indexOfRoot), twelveToneScale.slice(0,indexOfRoot)].flat()
  }

  get keyNotes(){
    const kci = this.keyChromaticInterval;
    return [kci[0], kci[2], kci[4], kci[5], kci[7], kci[9], kci[11]];
  }

  get modeNotes() {
    const key = this.keyNotes;
    const modeNumber = modes[this._mode];
    return [key.slice(modeNumber), key.slice(0,modeNumber)].flat();
  }

  get root(){
    return `The root of this scale is ${this._root}`;
  }

  get mode(){
    return `The mode of this scale is ${this._mode}.`;
  }
}
