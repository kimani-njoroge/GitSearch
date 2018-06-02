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

  ngOnInit() {
  }

}
