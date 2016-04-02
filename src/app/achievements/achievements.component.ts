import {Component, OnInit} from 'angular2/core';
import {ResumeDataService, Achievements} from '../resume-data.service';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Achievements` component loaded asynchronously');

@Component({
  selector: 'achievement',
  //styleUrls: ["assets/css/material.light_blue-orange.min.css"],
  template: `
    <section *ngFor="#achievement of achievements" class="achievements-box section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <header class="achievement-{{achievement.id}} mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
            </header>
            <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
              <div class="mdl-card__supporting-text">
                <h4>{{achievement.name}}</h4>
                <h6>{{achievement.description}}</h6>
              </div>
            </div>
    </section>
  `
})

export class AchievementsComponent implements OnInit {
  achievements: Achievements[];
  errorMessage: string;
  constructor(private _ResumeDataService: ResumeDataService) { }

  ngOnInit() { this.getAchievements(); }

  getAchievements() {
      this._ResumeDataService.getAchievements()
        .subscribe(
            achievements => this.achievements = achievements,
            error =>  this.errorMessage = <any>error
        );
  }
}
