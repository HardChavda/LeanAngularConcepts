import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Injectable()
export class ServerService{
  constructor(private http : Http){}
  saveCompany(company : any){
    const header = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8080/company',company,{headers:header});
  }
}
