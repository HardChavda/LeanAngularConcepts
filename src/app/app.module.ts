import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ServerComponent} from "./Server/server.component";
import {
  MdButtonModule, MdCardModule, MdIconModule, MdMenuModule, MdToolbarModule,
  MdPaginatorModule, MdTableModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Routes, RouterModule} from "@angular/router";
import {ServerService} from "./Server/server.service";
import {HttpModule} from "@angular/http";
import {MdDataTableModule} from "ng2-md-datatable";
import {TablePaginationExample} from "./table-example/table-example.component";
import {CdkTableModule} from "@angular/cdk";
import { TestingComponent } from './testing/testing.component';

const appRoutes: Routes = [
  {path:"server", component: ServerComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TablePaginationExample,
    TestingComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdMenuModule,
    MdPaginatorModule,
    MdToolbarModule,
    MdDataTableModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MdTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
