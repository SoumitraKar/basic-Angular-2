import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Dashboard }   from './Dashboard/Dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ Dashboard ],
  bootstrap:    [ Dashboard ]
})
export class landingPageModule {  }
