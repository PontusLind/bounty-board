import { Component } from '@angular/core';
import { DataManagerService } from './data-manager.service'
import { Router, RouterLinkActive, RouterLink } from '@angular/router';


@Component({
  selector: 'app-list',
  template: `
  <div *ngIf="datamanager.list != undefined">
  <ul class="list-group list-group-flush">
  <li id="radius-border" *ngFor='let c of datamanager.list.bounty' class="list-group-item" >
  <a routerLink="/board/{{c.id}}" routerLinkActive="active-link">Name: {{c.name}} Object: {{c.object}}</a>    
  </li>
</ul>
</div>

    `
})


export class ListComponent {

  constructor(private datamanager: DataManagerService, private router: Router) { }
  onGoToBoard(id){
    this.router.navigate(['/board/', id]);
}

}
