import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service'
import { ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-profile-view',
  template: `
  <div *ngIf="data != undefined">

  <div class="card">
  <img class="card-img-top" [src]="this.datamanager.getImage(data.profileImage)" alt="{{data.namn}}">
  <div class="card-block">
  <h4 class="card-title">{{data.name}}</h4>
  </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">Reward: {{data.reward}} credits</li>
    <li class="list-group-item">Objective: {{data.object}}</li>
  </ul>
</div>

</div>


    `
})
export class ProfileViewComponent implements OnInit {
  data;
  constructor(private datamanager: DataManagerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.setData(params['id']));
    this.data = this.datamanager.bounty
  }

  setData(id : number)
  {
    this.datamanager.getBounty(id);
    this.data = this.datamanager.bounty;
  }
}
