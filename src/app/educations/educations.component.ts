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
    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
      <thead>
        <tr>
           <th class="mdl-data-table__cell--non-numeric">Name</th>
           <th class="mdl-data-table__cell--non-numeric">Origin</th>
        </tr>
      </thead>
      <tbody>
       <tr *ngFor="#education of educations">
        <td class="mdl-data-table__cell--non-numeric">{{education.name}}</td>
        <td class="mdl-data-table__cell--non-numeric">{{education.origin}}</td>
       </tr>
      </tbody>  
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
