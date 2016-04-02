import {
    Component,
    OnInit
} from 'angular2/core';
import {
    ResumeDataService,
    SoftSkills
} from '../resume-data.service';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Soft Skills` component loaded asynchronously');

@Component({
    selector: 'soft-skills',
    //styleUrls: ["assets/css/material.light_blue-orange.min.css"],
    template: `
    
    
    <div class="demo-card-wide softSkills mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">What type of person am I?</h2>
        </div>
        <div class="mdl-card__supporting-text">
            <ul>
                <li *ngFor="#softSkill of softSkills">
                    {{softSkill.description}}
                </li>
            </ul>
        </div>
    </div>
  `
})

export class SoftSkillsComponent implements OnInit {
    softSkills: SoftSkills[];
    errorMessage: string;
    constructor(private _ResumeDataService: ResumeDataService) {}

    ngOnInit() {
        this.getSoftSkills();
    }

    getSoftSkills() {
        this._ResumeDataService.getSoftSkills()
            .subscribe(
                softSkills => this.softSkills = softSkills,
                error => this.errorMessage = < any > error
            );
    }
}