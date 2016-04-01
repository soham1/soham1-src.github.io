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
    <table>
      <tr *ngFor="#tool of tools">
        <td>{{tool.name}}</td>
        <td>{{tool.description}}</td>
      </tr>
    </table>
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
