export const scales = {
  name: "This is a scale"
}

export class Bass {
  constructor(strings){
    this._strings = strings;
  }

  get strings(){
    return `This bass has ${this._strings} strings`;
  }
}
