import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitsearchService } from '../service/gitsearch.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user: any=[];
  repositories: any =[];
  username: string;

  constructor(private GitsearchService: GitsearchService, public gitsearch: GitsearchService, private http: HttpClient) {}

  search(name: string){
    name= name || "kimani-njoroge"
    this.gitsearch.outcome = [];
    this.gitsearch.outcome1 = [];
    this.gitsearch.outcome2 = [];
    this.gitsearch.outcome3 = [];
  }

  ngOnInit() {
    this.search("kimani-njoroge");
    this.GitsearchService.getUser().subscribe(users => {
      this.user = users;
    });

    this.GitsearchService.getRepo().subscribe(repositories => {
      this.repositories = repositories;
    });
  }

  userSearch(){
    this.GitsearchService.updateUser(this.username);
    this.GitsearchService.getUser().subscribe(users => {
      console.log(users);
      this.user = users;
    });
    this.GitsearchService.getRepo().subscribe(repositories => {
      this.repositories = repositories;
    });
  }

}
