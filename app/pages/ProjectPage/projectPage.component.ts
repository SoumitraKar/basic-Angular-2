import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-page',
  templateUrl: './app/pages/projectPage/projectPage.component.html',
  styleUrls: ['./app/pages/projectPage/projectPage.component.css']
})
export class projectPage {
  @Input() pageName: string;
}
