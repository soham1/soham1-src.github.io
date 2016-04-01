import {Component, OnInit} from 'angular2/core';
import {ResumeDataService, MyGithubProjects} from '../resume-data.service';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Projects` component loaded asynchronously');

@Component({
  selector: 'project',
  //styleUrls: ["assets/css/material.light_blue-orange.min.css"],
  template: `
    <table>
      <tr *ngFor="#project of projects">
        <td><a href="{{project.projectURL}}">{{project.projectName}}</a></td>
        <td>{{project.description}}</td>
      </tr>
    </table>
  `
})

export class ProjectsComponent implements OnInit {
  projects: MyGithubProjects[];
  errorMessage: string;
  constructor(private _ResumeDataService: ResumeDataService) { }

  ngOnInit() { this.getProjects(); }

  getProjects() {
      this._ResumeDataService.getProjects()
        .subscribe(
            projects => this.projects = projects,
            error =>  this.errorMessage = <any>error
        );
  }
}
