import {Component} from "@angular/core";
@Component({
  selector : 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{

  allowNewServer = false;
  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },5000)
  }

  serverId: number = 10;
  serverStatus: string = "Online";

  getServerStatus(){
    return this.serverStatus;
  }

}
