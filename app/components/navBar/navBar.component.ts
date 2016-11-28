import { Component, Input } from '@angular/core';

@Component({
  selector: 'navBar-component',
  templateUrl: './app/components/navBar/navBar.component.html',
  styleUrls: ['./app/components/navBar/navBar.component.css']
})
export class navBarComponent {
  @Input() pageName: string;
}
