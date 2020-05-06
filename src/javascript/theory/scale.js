export class Scale {
  constructor(root, mode){
    this._root = root;
    this._mode = mode;
  }

  get root(){
    return `The root of this scale is ${this._root}`;
  }

  get mode(){
    return `The mode of this scale is ${this._mode}.`;
  }
}
