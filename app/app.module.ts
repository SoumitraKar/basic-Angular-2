import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './app.component';
import { landingPage } from './pages/landingPage/landingPage.component';
import { navBarComponent } from './components/navBar/navBar.component';
import { slidingSideBarComponent } from './components/slidingSideBar/slidingSideBar.component';

const appRoutes: Routes = [
  { path: '', component: landingPage }
];

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot(appRoutes)
                ],
  declarations: [ AppComponent, landingPage, navBarComponent, slidingSideBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
