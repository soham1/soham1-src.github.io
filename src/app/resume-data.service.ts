import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';


export interface ComputerScienceEducation {
  name: string;
  origin: string;
}

export interface Achievement {
  name: string;
  description: string;
}

export interface SoftwareAndTools {
  name: string;
  description: string;
}

export interface ComputerScienceSkills {
  category: string;
  technologies: string[];
}

export interface MyGithubProjects {
  projectName: string;
  projectURL: string;
  description : string;
}

export interface SoftSkills {
  description : string;
}

export interface MyInfo {
  name: string;
  email: string;
  address: string;
  phone: string;
}

@Injectable()
export class ResumeDataService {
  constructor(private _http: Http) { }

  getSkills() {
    return this._http.get("/assets/data/skills.json")
      .map((response: Response) => <ComputerScienceSkills[]>response.json().skills)
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  getSoftSkills() {
    return this._http.get("/assets/data/softSkills.json")
      .map((response: Response) => <SoftSkills[]>response.json().softSkills)
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
