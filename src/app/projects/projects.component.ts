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
  
    <div *ngFor="#project of projects" class="demo-card-event github-project mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title mdl-card--expand">
            <div class="mdl-grid">
                <div class="mdl-cell mdl-cell--6-col">
                    <h4>{{project.projectName}}</h4>
                </div>
                <div class="mdl-cell mdl-cell--6-col">
                    <h6>{{project.description}}</h6>
                </div>
            </div>
        </div>
        <div class="mdl-card__menu">
            <a href="{{project.projectURL}}" target="blank">
                <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                    <i class="material-icons">link</i>
                </button>
            </a>
        </div>
    </div>
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
