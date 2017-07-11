import {Component, Input} from "@angular/core";
import {DataSource} from '@angular/cdk';
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
  isServerAdded = false;
  getServerStatus(){
    return this.serverStatus;
  }

  serverCreationStatus = "No Server is Added";

  onServerCreation(){
    this.serverCreationStatus = "Server Added!";
    this.isServerAdded = true;
  }

  eventMessage = '';
  onUpdateServer(event : Event){
    this.eventMessage = (<HTMLInputElement>event.target).value;
  }

  @Input('aliasName') serverElements:{type: string,name: string,content: string};

  localRefDemo(input){
    console.log(input.value);
  }
}
