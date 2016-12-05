import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { projectPageComponent }   from './projectPage/projectPage.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ projectPageComponent ],
  bootstrap:    [ projectPageComponent ]
})
export class projectPageModule {  }
