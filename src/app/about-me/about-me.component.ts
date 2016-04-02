import {Component} from 'angular2/core';
var material = require('exports?componentHandler&MaterialRipple!material-design-lite/material.js');

console.log('`About Me` component loaded asynchronously');

@Component({
  selector: 'about-me',
  template: require("./about-me.html")
})

export class AboutMeComponent {
  constructor() { }
  
  ngAfterContentInit() {
    material.upgradeDom();
  }

}

