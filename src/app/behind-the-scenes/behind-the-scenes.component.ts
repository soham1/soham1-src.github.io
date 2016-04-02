import {Component} from 'angular2/core';
var material = require('exports?componentHandler&MaterialRipple!material-design-lite/material.js');

console.log('`Behind The Scenes` component loaded asynchronously');

@Component({
  selector: 'about-me',
  template: require("./behind-the-scenes.html")
})

export class BehindTheScenesComponent {
  constructor() { }
  
  ngAfterContentInit() {
    material.upgradeDom();
  }

}

