import {Component, OnInit} from 'angular2/core';
import {ResumeDataService, ComputerScienceEducation} from '../resume-data.service';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Education` component loaded asynchronously');

@Component({
  selector: 'education',
  //styleUrls: ["assets/css/material.light_blue-orange.min.css"],
  template: `
    <table>
      <tr *ngFor="#education of educations">
        <td>{{education.name}}</td>
        <td>{{education.origin}}</td>
      </tr>
    </table>
  `
})

export class EducationsComponent implements OnInit {
  educations: ComputerScienceEducation[];
  errorMessage: string;
  constructor(private _ResumeDataService: ResumeDataService) { }

  ngOnInit() { this.getEducations(); }

  getEducations() {
      this._ResumeDataService.getEducations()
        .subscribe(
            educations => this.educations = educations,
            error =>  this.errorMessage = <any>error
        );
  }
}
