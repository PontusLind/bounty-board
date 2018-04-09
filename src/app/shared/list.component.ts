import { Component } from '@angular/core';
import { DataManagerService } from './data-manager.service'
import { Router, RouterLinkActive, RouterLink } from '@angular/router';
import { SearchPipe } from '../shared/search.pipe'
import { OrderByPipe } from '../shared/order-by.pipe'


@Component({
  selector: 'app-list',
  template: `
  <div *ngIf="datamanager.list != undefined">

  <input class="searchBox" [(ngModel)]="searchText" placeholder="Enter bounty name">
  <ul class="list-group list-group-flush">
  <li id="radius-border" *ngFor='let c of datamanager.list.bounty | search : searchText | orderby : bool | slice:0:15' class="list-group-item" >
    <a routerLink="/board/{{c.id}}" routerLinkActive="active-link">Name: {{c.name}} Object: {{c.object}}</a>    
  </li>
</ul>
</div>

    `
})


export class ListComponent {
  bool = true;
  constructor(private datamanager: DataManagerService, private router: Router) { }
  onGoToBoard(id){
    this.router.navigate(['/board/', id]);
}

}
