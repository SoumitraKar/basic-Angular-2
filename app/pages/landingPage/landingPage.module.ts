import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { landingPage }   from './landingPage/landingPage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ landingPage ],
  bootstrap:    [ landingPage ]
})
export class landingPageModule {  }
