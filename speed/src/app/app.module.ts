import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgenciesSearchComponent } from './agencies/agencies-search';
import { AgenciesContainerComponent } from './agencies/agencies-container';
import { StatusSearchComponent } from './status/status-search';
import { StatusContainerComponent } from './status/status-container';
import { MissionsSearchComponent } from './missions/missions-search';
import { MissionsContainerComponent } from './missions/missions-container';
import { DisplayComponent } from './display/launches-display';


@NgModule({
  declarations: [
    AppComponent,
    AgenciesSearchComponent,
    AgenciesContainerComponent,
    StatusSearchComponent,
    StatusContainerComponent,
    MissionsSearchComponent,
    MissionsContainerComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
