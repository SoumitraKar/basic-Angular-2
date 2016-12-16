import { Injectable } from '@angular/core';
import { PROJECTS } from './mock.projects';
import { projects } from './projects';

@Injectable()
export class projectsService {
    getProjects() {
        return Promise.resolve(PROJECTS);
    }
    addProject(project: projects) {
        Promise.resolve(PROJECTS).then((projects: projects[]) => projects.push(project));
    }
}