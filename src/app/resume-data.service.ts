import {
    Injectable
} from 'angular2/core';
import {
    Http,
    Response
} from 'angular2/http';
import {
    Observable
} from 'rxjs/Rx';


export interface ComputerScienceEducation {
    name: string;
    origin: string;
}

export interface Achievements {
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
    description: string;
}

export interface SoftSkills {
    description: string;
}

export interface MyInfo {
    name: string;
    email: string;
    address: string;
    phone: string;
}

@Injectable()
export class ResumeDataService {
    public titleMap = new Map();

    constructor(private _http: Http) {
        this.titleMap.set("", "Computer Science Skills");
        this.titleMap.set("skills", "Computer Science Skills");
        this.titleMap.set("softSkills", "Soft Skills");
        this.titleMap.set("educations", "Computer Science Education");
        this.titleMap.set("achievements", "Achievements");
        this.titleMap.set("tools", "Software and Tools");
        this.titleMap.set("projects", "Github Projects");
        this.titleMap.set("aboutMe", "About Me");
    }

    getSkills() {
        return this._http.get("/assets/data/skills.json")
            .map((response: Response) => < ComputerScienceSkills[] > response.json().skills)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getSoftSkills() {
        return this._http.get("/assets/data/softSkills.json")
            .map((response: Response) => < SoftSkills[] > response.json().softSkills)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getEducations() {
        return this._http.get("/assets/data/educations.json")
            .map((response: Response) => < ComputerScienceEducation[] > response.json().educations)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getAchievements() {
        return this._http.get("/assets/data/achievements.json")
            .map((response: Response) => < Achievements[] > response.json().achievements)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getTools() {
        return this._http.get("/assets/data/tools.json")
            .map((response: Response) => < SoftwareAndTools[] > response.json().tools)
            .do(data => console.log(data))
            .catch(this.handleError);

    }
    
    getProjects() {
        return this._http.get("/assets/data/projects.json")
            .map((response: Response) => < MyGithubProjects[] > response.json().projects)
            .do(data => console.log(data))
            .catch(this.handleError);
       
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}