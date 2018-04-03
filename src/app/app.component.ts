import { Component } from '@angular/core';
import { DataManagerService } from './shared/data-manager.service'
import { FactoryOrValue } from 'rxjs/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data : any;
  ready : boolean = false;
  constructor(private datamanager: DataManagerService) { 
  }
  async ngOnInit() {
    await this.datamanager.lode();
    this.ready = true;
  }

  accepted()
  {
    this.datamanager.accepted = false;
  }
}
