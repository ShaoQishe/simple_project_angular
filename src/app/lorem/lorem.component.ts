import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../translate.service';


@Component({
  selector: 'app-lorem',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lorem.component.html',
  styleUrl: './lorem.component.css'
})
export class LoremComponent {
    
    listoflanguages = ["de",/*"pl", */"en", "fr", "jpn", "chi", "ru"];

    languages = [
      /*{name: "pl", value: "Polish"},*/
      {name: "de", value: "Niemiecki", desc: "Hier wird Ihr Text auf Deutsch verfasst"},
      {name: "en", value: "Angielski", desc: "Here your text will be written in English"},
      {name: "fr", value: "Francuski", desc: "Ici, votre texte sera écrit en français"},
      {name: "jpn", value: "Japoński", desc: "ここでは、テキストが日本語で書かれます"},
      {name: "chi", value: "Chiński", desc: "这里将用中文写您的文本"},
      {name: "ru", value: "Rosyjski", desc: "Здесь ваш текст будет написан на русском языке"}
    ];

    selected="de";

    language = "Niemiecki";

    description = "Hier wird Ihr Text auf Deutsch verfasst";

    output = '';
    input = '';

    langpair = 'pl|'+ this.selected;

    url = '';
    
    input2= this.input + '%20';

    pair() {
      this.langpair = 'pl|' + this.selected;
      this.translate();
      for (let lang of this.languages) {
        if (lang.name == this.selected) {
          this.language = lang.value;
          this.description = lang.desc;
        }
      }
    }

    constructor(private translateService: TranslateService) { }

    translate() {
      this.langpair = 'pl|' + this.selected;
      if (this.input == "")
      {
        this.output = "";
      }
      else
      {

        this.input2 = this.input.replace(/ /g, '%20');
        this.url = "https://api.mymemory.translated.net/get?q=" + this.input2 + "&langpair=" + this.langpair;
        //this.output = this.url;
        this.output = this.translateService.translate(this.url);
        /*fetch(this.url)
        .then(response => response.json())
        .then(data => {
          this.output = data.responseData.translatedText;
        })
        .catch(error => {
          console.error('There was an error!', error);
        });*/
        
      
      }}
    }
    