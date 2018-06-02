import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

    private username: string;
    private access_token: string = environment.access_token;

    outcome: Object[];
    outcome1: Object[];
    outcome2: Object[];
    outcome3: Object[];

  constructor(private http:HttpCLient) {
    this.username = 'Kimani';
    this.outcome = [];
    this.outcome1 = [];
    this.outcome2 = [];
    this.outcome3 = [];
  }
}
