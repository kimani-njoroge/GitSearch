import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitsearchService } from '../service/gitsearch.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  user: any=[];
  repositories: any=[];
  username: string;
  reponame: '';
  repo:any=[];

  constructor(private GitsearchService: GitsearchService, public gitsearch: GitsearchService, private http: HttpClient) {}


  ngOnInit() {
  }

  repoSearch(){
    console.log(this.reponame)
    let res = this.GitsearchService.searchRepo(this.reponame)
    res.then((response)=>{
    this.repo = response
    console.log(response)
  })
  }
}
