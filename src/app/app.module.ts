import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ServerComponent} from "./Server/server.component";
import {MdButtonModule, MdCardModule, MdIconModule, MdMenuModule, MdToolbarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Routes, RouterModule} from "@angular/router";
import {ServerService} from "./Server/server.service";
import {HttpModule} from "@angular/http";

const appRoutes: Routes = [
  {path:"server", component: ServerComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
