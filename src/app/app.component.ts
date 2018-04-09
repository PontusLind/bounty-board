import { Component, HostListener } from '@angular/core';
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
  number : number = 0;
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

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    if(this.datamanager.accepted == true)
    {
      if(this.number == 1)
      {
        this.datamanager.accepted = false;
        this.number = 0;
      }
      else 
      {
        this.number++;
      }
    }
  }
}
