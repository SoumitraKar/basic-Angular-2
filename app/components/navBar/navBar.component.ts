import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVE } from '@angular/router';

@Component({
  selector: 'navBar-component',
  templateUrl: './app/components/navBar/navBar.component.html',
  styleUrls: ['./app/components/navBar/navBar.component.css']
})
export class navBarComponent {
  @Input() pageName: string;
}
