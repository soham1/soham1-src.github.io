/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home';
import {SkillsComponent} from './skills';
import {SoftSkillsComponent} from './soft-skills/soft-skills.component';
import {EducationsComponent} from './educations/educations.component';
import {AchievementsComponent} from './achievements/achievements.component'
import {AppState} from './app.service';
import {RouterActive} from './router-active';
import {ResumeDataService} from './resume-data.service';
import {HTTP_PROVIDERS} from 'angular2/http';
var material = require('exports?componentHandler&MaterialRipple!material-design-lite/material.js');
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ResumeDataService, HTTP_PROVIDERS ],
  directives: [ RouterActive ],
  styleUrls: ["app/app.component.css"],
  templateUrl: "app/app.component.html",
  //styleUrls: ["assets/css/material.light_blue-orange.min.css"],
  // template: `
  //   <header>
  //     <nav>
  //       <h1>Hello {{ name }}</h1>
  //       <ul>
  //         <li router-active>
  //           <a [routerLink]=" ['Home'] ">Home</a>
  //         </li>
  //         <li router-active>
  //           <a [routerLink]=" ['About'] ">About</a>
  //         </li>
  //         <li router-active>
  //           <a [routerLink]=" ['Skills'] ">Skills</a>
  //         </li>
  //       </ul>
  //     </nav>
  //   </header>
  //
  //   <main>
  //     <router-outlet></router-outlet>
  //   </main>
  //
  //   <footer>
  //     WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a>
  //     <div>
  //       <img [src]="angularclassLogo" width="10%">
  //     </div>
  //   </footer>
  //
  //   <pre>this.appState.state = {{ appState.state | json }}</pre>
  // `
})
@RouteConfig([
  { path: '/', name: 'Skills', component: SkillsComponent, useAsDefault: true },
  { path: '/softSkills', name: 'SoftSkills', component: SoftSkillsComponent },
  { path: '/skills',  name: 'Skills',  component: SkillsComponent },
  { path: '/educations',  name: 'Educations',  component: EducationsComponent },
  { path: '/achievements',  name: 'Achievements',  component: AchievementsComponent },
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  pageTitle: string = "";
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState, private router: Router, private service: ResumeDataService) {
    router.subscribe((pagePath) => {
      this.pageTitle = <string>service.titleMap.get(pagePath);
    });
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  ngAfterContentInit() {
    console.log("After views checked init");
    material.upgradeDom();
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
