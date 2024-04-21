import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor() { }

  output:string = '';

  translate(url : string)
  {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.output = data.responseData.translatedText;
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.output = data.responseData.translatedText;
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
    console.log(this.output);
    return this.output;
  }
}
