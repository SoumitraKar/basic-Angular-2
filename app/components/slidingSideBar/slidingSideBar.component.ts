import { Component, Input } from '@angular/core';

@Component({
  selector: 'slidingSideBar-component',
  templateUrl: './app/components/slidingSideBar/slidingSideBar.component.html',
  styleUrls: ['./app/components/slidingSideBar/slidingSideBar.component.css']
})
export class slidingSideBarComponent {
  @Input() pageName: string;
}
