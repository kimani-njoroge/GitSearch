import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
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
  getUser() {
    return this.http.get('https://api.github.com/users/' + this.username + '?access_token=' + this.access_token)
      .map(outcome => outcome);
  }
  getRepo() {
     return this.http.get('https://api.github.com/users/' + this.username  + '/repos?access_token=' + this.access_token)
       .map(outcome => outcome);
   }
   updateUser(username: string) {
     this.username = username;
   }
   isEmptyObject(obj) {
     for (var property in obj) {
       if (obj.hasOwnProperty(property)) {
         return false;
       }
     }
     return true;
   }
   search(term: string) {
     let httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
        //  'Authorization': environment.Authorization
       })
     }
}
