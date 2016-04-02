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
  //styleUrls: ["assets/css/material.light_blue-orange.min.css"],
  template: `
    <section *ngFor="#skill of skills" class="skill-box section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <header class="skill-{{skill.id}} mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
            </header>
            <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
              <div class="mdl-card__supporting-text">
                <h4>{{skill.category}}</h4>
                <ul *ngFor="#technology of skill.technologies">
                    <li>{{technology}}</li>
                </ul>
              </div>
            </div>
    </section>
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
