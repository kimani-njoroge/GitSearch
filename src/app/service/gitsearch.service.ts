import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

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

  constructor(private http:HttpClient) {
    this.username = 'kimani-njoroge';
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
   search(name: string) {
     let httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
       })
     }
     let promise = new Promise((resolve, reject) => {
       this.http.get<any>(environment.apiUrl + "users/" + name, httpOptions).toPromise().then(
         response => {

           if (this.isEmptyObject(response)){
           } else {
             this.outcome2.push(response)
           }
           resolve()
         },
         err => console.log('Error occured')),
         this.http.get<any>(environment.apiUrl + "search/repositories?q= {" + name + "}", httpOptions).toPromise().then(
           response => {
            if (this.isEmptyObject(response['items'])) {
            } else {
              this.outcome1.push(response)
              this.outcome3 = response.items;
            }
            resolve()
           },
           err => console.log('error ocurred'))
     })
     return promise;
   }
}
