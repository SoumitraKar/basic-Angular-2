import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { slidingSideBarComponent }   from './slidingSideBar/slidingSideBar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ slidingSideBarComponent ],
  bootstrap:    [ slidingSideBarComponent ]
})
export class slidingSideBarModule {  }
