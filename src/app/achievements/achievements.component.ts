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
    <table>
      <tr *ngFor="#achievement of achievements">
        <td>{{achievement.name}}</td>
        <td>{{achievement.description}}</td>
      </tr>
    </table>
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
