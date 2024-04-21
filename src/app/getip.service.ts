import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetipService {
  static getip() {
    throw new Error('Method not implemented.');
  }

  a = "string";

  constructor() { 
    //alert('GetipService');
    fetch('https://api.ipify.org/')
    .then(async data => {
      this.a = await data.text();
    });
  }

  getip() {
    return this.a;
  }
}
