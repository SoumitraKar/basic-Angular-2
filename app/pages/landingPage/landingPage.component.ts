import { Component, Input } from '@angular/core';
import './../../../routes/landingPageRoute.js'

@Component({
  selector: 'landing-page',
  templateUrl: './app/pages/landingPage/landingPage.component.html'
})
export class landingPage {
  pageName = "Landing Page";
  eventBinding() {
    console.log("Hello");
    // functionName();
  }
}
