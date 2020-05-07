export const twelveToneScale = [ "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb" ]
const modes = {
  "I": {
    "name": "Ionian",
    "altName": "Major",
    "scaleShift": 0,
    "halfStepsFromKeyRoot": 0 
  },
  "II": {
    "name": "Dorian",
    "scaleShift": 1,
    "halfStepsFromKeyRoot": 2 
  },
  "III": {
    "name": "Phrygian",
    "scaleShift": 2,
    "halfStepsFromKeyRoot": 4 
  },
  "IV": {
    "name": "Lydian",
    "scaleShift": 3,
    "halfStepsFromKeyRoot": 5
  },
  "V": {
    "name": "Mixolydian",
    "scaleShift": 4,
    "halfStepsFromKeyRoot": 7 
  },
  "VI": {
    "name": "Aeolian",
    "altName": "Minor",
    "scaleShift": 5,
    "halfStepsFromKeyRoot": 9 
  },
  "VII": {
    "name": "Locrian",
    "scaleShift": 6,
    "halfStepsFromKeyRoot": 11 
  },
}
// const modes_names = { "Ionian": 0, "Dorian": 1, "Phrygian": 2, "Lydian": 3, "Mixolydian": 4, "Aeolian": 5, "Locrian": 6 }
// const modeHalfSteps = { "Ionian": 0, "Dorian": 2, "Phrygian": 4, "Lydian": 5, "Mixolydian": 7, "Aeolian": 9, "Locrian": 11 }

export class Scale {
  constructor(root, mode="I"){
    this._root = root;
    this._mode = mode;
  }

  get modeHash(){
    return modes[this._mode];
  }

  get halfStepsFromKeyRoot(){
    return this.modeHash.halfStepsFromKeyRoot;
  }

  get scaleShift(){
    return this.modeHash.scaleShift;
  }

  get modeName(){
    return this.modeHash.name;
  }

  get keyChromaticInterval() {
    const indexOfRoot = twelveToneScale.indexOf(this._root) - this.halfStepsFromKeyRoot;
    return [twelveToneScale.slice(indexOfRoot), twelveToneScale.slice(0,indexOfRoot)].flat()
  }

  get parentKeyNotes(){
    const kci = this.keyChromaticInterval;
    return [kci[0], kci[2], kci[4], kci[5], kci[7], kci[9], kci[11]];
  }

  get notes() {
    const key = this.parentKeyNotes;
    const modeNumber = this.scaleShift;
    return [key.slice(modeNumber), key.slice(0,modeNumber)].flat();
  }

  get modeInfo(){
    return `This is the ${this._root} ${this.modeName} scale of the ${this.parentKeyNotes[0]} major scale.`;
  }
}
