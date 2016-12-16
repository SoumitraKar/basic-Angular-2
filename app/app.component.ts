import { Component } from '@angular/core';
import { projectsService } from './projects.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [projectsService]
})
export class AppComponent { 
  public projects;
  constructor(private _projectsService: projectsService){} 
    getProjects(){
    this._projectsService.getProjects().then((projects: projects[]) => this.projects = projects);
  }
  public name = 'Soumitra'; 
  addProject() {
    const contact = { projectName: "Project 3", projectId: "Project3" };
    this._projectsService.addUserDetails(contact);
  }
  ngOnInit():any { //init function
    this.getProjects();
  }
}
