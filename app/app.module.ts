import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Internal routing 
import { HttpModule, JsonpModule } from '@angular/http'; // Internal routing 

import { AppComponent }  from './app.component';
import { Dashboard } from './pages/Dashboard/Dashboard.component';
import { navBarComponent } from './components/navBar/navBar.component';
import { slidingSideBarComponent } from './components/slidingSideBar/slidingSideBar.component';
import { projectPage } from './pages/projectPage/projectPage.component';

const appRoutes: Routes = [ // Internal routing 
  { path: 'Dashboard', component: Dashboard },
  { path: 'projectPage', component: projectPage }
];

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  JsonpModule,
                  RouterModule.forRoot(appRoutes) // Internal routing 
                ],
  declarations: [ AppComponent, Dashboard, navBarComponent, slidingSideBarComponent, projectPage ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
