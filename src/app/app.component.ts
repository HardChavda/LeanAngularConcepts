import { Component } from '@angular/core';
import {ServerService} from "./Server/server.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = '';
  constructor(private serverService:ServerService){

  }
  public company ={
    "name":"kjewsssflkj",
    "companyContactPerson":"elfkcm",
    "companyMobileNumber":"+91-9876543210",
    "companyEmail":"abcd@gmail.com"
  }
  addCompany(){
    this.serverService.saveCompany(this.company).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  getCompany(){
    this.serverService.findCompany().subscribe(
      (response : Response) => {
        const data = response.json();
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
