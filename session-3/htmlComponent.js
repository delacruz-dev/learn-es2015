"use strict";

class ParagraphComponent {
  constructor(text){
    this._text = text;
  }

  render(){
    const p = document.createElement('p');
    p.textContent = this._text;
    return p;
  }
};

const p = new ParagraphComponent('Hello, World!');
document.body.appendChild(p.render());