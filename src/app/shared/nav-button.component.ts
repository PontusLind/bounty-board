import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-nav-button',
  template: `
  <div *ngIf="isBoard == false">
  <a class="nav-button nav-button-2" (click)="onGoToBoard(datamanager.bounty.id)">Back to list</a>
  </div>

  <div *ngIf="isBoard == false">
  <a class="nav-button nav-button-2" (click)="removeBounty(datamanager.bounty.id)">Accept bounty</a>
  </div>

  <div *ngIf="isBoard == true">
  <a class="nav-button nav-button-1" (click)="onGoToProfile(datamanager.bounty.id)">Detales</a>
  </div>
    `
})


export class NavButtonComponent implements OnInit {
    rout: string;
    isBoard: boolean;
    id: number;
  constructor(private datamanager: DataManagerService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe((route: ActivatedRoute) => this.whatRoute());
    this.route.params.subscribe((params: Params) => this.id = params['id']);
    this.whatRoute()
  }

  whatRoute()
  {
    this.rout = this.router.url;
    if (this.rout.includes("board"))
        this.isBoard = true;
    else
        this.isBoard = false;
  }

  onGoToBoard(id){
      this.router.navigate(['/board/', id]);
  }
  onGoToProfile(id){
    this.router.navigate(['/profile/', id]);
}
removeBounty(id : number){
    var a = [];
    this.datamanager.list.bounty.forEach(p => {
      if (p.id != id)
      {
        a.push(p);
      }
    });
    this.datamanager.list.bounty = a;
    this.datamanager.accepted = true;
    this.router.navigate(['/board']);
  }



}
