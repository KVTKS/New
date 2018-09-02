import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let apiUrl = 'http://localhost/eattendance/';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
    
    }
  }


