import { Injectable } from '@angular/core';
import { Component, Input } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';




@Injectable()
export class DataManagerService {
 public list;
 public bounty;
 public accepted = false;
 id: number;


  constructor(private http: Http,  private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {this.id = params['id']});
  }

  public setBounty()
  {
    if (this.id == null || this.id == undefined)
    {
      this.id = Math.floor(Math.random() * Math.floor(this.list.bounty.length));
      // this.router.navigate(['/board/', this.id]);
      this.getBounty(this.id);
    }
  }

   public async lode(){
    await this.getLocalJSONFile("../../assets/bounty-list.json");
    await this.makeId();
    await this.setBounty();  
  }

  async getLocalJSONFile(path: string){
      this.list = await this.http.get(path).toPromise().then(response => response.json());
  }

  public makeId(){
    var id = 0;
    this.list.bounty.forEach(p => {
      p.id = id++;
    });
  }

  public getBounty(id : number){
    if(id == undefined)
      id = Math.floor(Math.random() * Math.floor(this.list.bounty.length));
    this.list.bounty.forEach(p => {
      if (p.id == id)
      {
        this.bounty = p;
      }
    });
  }

  public removeBounty(id : number){
    var a = [this.list.bounty.length - 1];
    this.list.bounty.forEach(p => {
      if (p.id != id)
      {
        a.push(p);
      }
    });
    this.list = a;
  }

  public getImage(url: String)
  {
    return "../../assets/images/" + url + ".jpg";
  }

  public getPImage(url: String)
  {
    return "../../assets/planet/" + url + ".jpg";
  }
}
