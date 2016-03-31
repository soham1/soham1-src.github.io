import {Component, OnInit} from 'angular2/core';
import {ResumeDataService, ComputerScienceSkills} from '../resume-data.service';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Skills` component loaded asynchronously');

@Component({
  selector: 'skills',
  template: `
    <table>
      <tr *ngFor="#skill of skills">
        <td>{{skill.category}}</td>
      </tr>
    </table>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
      <i class="material-icons">add</i>
    </button>
  `
})

export class SkillsComponent implements OnInit {
  skills: ComputerScienceSkills[];
  errorMessage: string;
  constructor(private _ResumeDataService: ResumeDataService) { }

  ngOnInit() { this.getSkills(); }

  getSkills() {
      this._ResumeDataService.getSkills()
        .subscribe(
            skills => this.skills = skills,
            error =>  this.errorMessage = <any>error
        );
  }
}
