import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service'
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  template: `
  <div *ngIf="data != undefined">

  <div class="card">
  
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Employer: {{data.employer}}</li>
  <li class="list-group-item">Details: {{data.details}}</li>
  </ul>

  <div class="card-block">
    <h4 class="card-title">{{data.planet}}</h4>
  </div>

    <img class="card-img-top" [src]="this.datamanager.getPImage(data.planetImage)" alt="{{data.planet}}">
</div>

</div>

    `
})
export class ProfileDetailsComponent implements OnInit{
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
