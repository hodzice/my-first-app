import { Component } from '@angular/core';
import { ServersComponent } from '../servers/servers.component';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }  
  `]
})
export class ServerComponent {
    serverStatus: string = 'offline'; //alt -> serverStatus 
    serverNewName = '';

    constructor(private serversComponent: ServersComponent) {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
      this.serverNewName = this.serversComponent.serverName;
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor() {
      return this.serverStatus === 'online' ? 'green' : 'red';
    }
}


