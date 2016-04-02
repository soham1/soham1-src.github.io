import {Component, OnInit} from 'angular2/core';
import {ResumeDataService, SoftwareAndTools} from '../resume-data.service';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Tools` component loaded asynchronously');

@Component({
  selector: 'tools',
  //styleUrls: ["assets/css/material.light_blue-orange.min.css"],
  template: `
     <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp list-container">
            <div class="mdl-card mdl-cell mdl-cell--12-col">
              <div *ngFor="#tool of tools" class="mdl-card__supporting-text list-container-text mdl-grid mdl-grid--no-spacing">
                <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                  <div class="section__circle-container__circle mdl-color--primary"></div>
                </div>
                <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                  <h5>{{tool.description}}</h5>
                  <div>{{tool.name}}</div>
                </div>
              </div>
            </div>
      </section>
  `
})

export class ToolsComponent implements OnInit {
  tools: SoftwareAndTools[];
  errorMessage: string;
  constructor(private _ResumeDataService: ResumeDataService) { }

  ngOnInit() { this.getTools(); }

  getTools() {
      this._ResumeDataService.getTools()
        .subscribe(
            tools => this.tools = tools,
            error =>  this.errorMessage = <any>error
        );
  }
}
