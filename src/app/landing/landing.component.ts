import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRequestService } from '../http/api-request.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
