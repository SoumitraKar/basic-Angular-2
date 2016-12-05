import { Component, Input, OnInit } from '@angular/core';
import { landingPageService } from './landingPage.service';

@Component({
  selector: 'landing-page',
  templateUrl: './app/pages/Dashboard/Dashboard.component.html',
  providers: [landingPageService]
})
export class Dashboard implements OnInit{
  pageName = "Landing Page";
  public contactDetail: landingPage = {userName: "Soumitra", userType: "Admin", userEmail: "soumitra.kar@wipro.com"};
  public userDetail: landingPage[];

  constructor(private _landingPageService: landingPageService){} 
  getUserDetails(){
    this._landingPageService.getUserDetails().then((userDetail: landingPage[]) => this.userDetail = userDetail);
  }
  addUserDetails() {
    console.log(this.contactDetail);
    const contact = {userName: "Soumitra", userType: "Admin", userEmail: "soumitra.kar@wipro.com"};
    console.log(this.contactDetail);
    this._landingPageService.addUserDetails(contact);
  }
  ngOnInit():any { //init function
    this.getUserDetails();
  }
}
