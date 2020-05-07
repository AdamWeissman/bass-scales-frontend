const twelveToneScale = [ "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb" ]
const intervals = ["r", "m2", "M2", "m3", "M3", "P4", "TT", "P5", "m6", "M6", "m7", "M7"]

const modes = {
  "I": {
    "name": "Ionian",
    "altName": "Major",
    "scaleShift": 0,
    "degreeName": "Tonic",
    "halfStepsFromKeyRoot": 0,
  },
  "II": {
    "name": "Dorian",
    "scaleShift": 1,
    "degreeName": "Supertonic",
    "halfStepsFromKeyRoot": 2 
  },
  "III": {
    "name": "Phrygian",
    "scaleShift": 2,
    "degreeName": "Mediant",
    "halfStepsFromKeyRoot": 4 
  },
  "IV": {
    "name": "Lydian",
    "scaleShift": 3,
    "degreeName": "Subdominant",
    "halfStepsFromKeyRoot": 5
  },
  "V": {
    "name": "Mixolydian",
    "scaleShift": 4,
    "degreeName": "Dominant",
    "halfStepsFromKeyRoot": 7 
  },
  "VI": {
    "name": "Aeolian",
    "altName": "Minor",
    "scaleShift": 5,
    "degreeName": "Submediant",
    "halfStepsFromKeyRoot": 9 
  },
  "VII": {
    "name": "Locrian",
    "scaleShift": 6,
    "degreeName": "Leading Tone",
    "halfStepsFromKeyRoot": 11 
  },
}

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
  
  get modeChromaticInterval() {
    const indexOfRoot = twelveToneScale.indexOf(this._root);
    return [twelveToneScale.slice(indexOfRoot), twelveToneScale.slice(0,indexOfRoot)].flat()
  }

  get notes() {
    const key = this.parentKeyNotes;
    const modeNumber = this.scaleShift;
    return [key.slice(modeNumber), key.slice(0,modeNumber)].flat();
  }

  get intervals(){
    const interval = [];
    for(const note of this.notes){
      let indexOfNote = this.modeChromaticInterval.indexOf(note);
      interval.push(intervals[indexOfNote]);
    }
    return interval;
  }

  get modeInfo(){
    return `This is the ${this._root} ${this.modeName} scale of the ${this.parentKeyNotes[0]} major scale.`;
  }
}
