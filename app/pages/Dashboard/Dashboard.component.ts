import { Component, Input, OnInit } from '@angular/core';
import { landingPageService } from './landingPage.service';
import { projectsService } from 'app/projects.service';

@Component({
  selector: 'landing-page',
  templateUrl: './app/pages/Dashboard/Dashboard.component.html',
  providers: [landingPageService, projectsService]
})
export class Dashboard implements OnInit{
  @Input() projects = [];
  pageName = "Landing Page";
  public contactDetail: landingPage = {userName: "Soumitra", userType: "Admin", userEmail: "soumitra.kar@wipro.com"};
  public userDetail: landingPage[];

  constructor(private _landingPageService: landingPageService, private _projectsService: projectsService){} 
  getUserDetails(){
    this._landingPageService.getUserDetails().then((userDetail: landingPage[]) => this.userDetail = userDetail);
  }
  addUserDetails() {
    console.log(this.contactDetail);
    const contact = {userName: "Soumitra", userType: "Admin", userEmail: "soumitra.kar@wipro.com"};
    console.log(this.contactDetail);
    this._landingPageService.addUserDetails(contact);
  }
  addProject() {
    const contact = { projectName: "Project 31", projectId: "Project31" };
    this._projectsService.addProject(contact);
  }
  ngOnInit():any { //init function
    this.getUserDetails();
  }
}
