import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVE } from '@angular/router';

@Component({
  selector: 'project-page',
  templateUrl: './app/pages/projectPage/projectPage.component.html',
  styleUrls: ['./app/pages/projectPage/projectPage.component.css']
})
export class projectPage {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  @Input() pageName: string;

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        let id = +params['id'];
        console.log(id);
      });
  }

}
