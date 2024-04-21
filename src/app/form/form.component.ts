import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../readloc.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  name: string = '';

  constructor(private localStorageService: LocalStorageService) {
    this.name = this.localStorageService.getItem('name') || '';
  }


  onSubmit() {
    alert("Form submitted!\n" + this.name + "\n");
    this.localStorageService.setItem('name', this.name);
  }
}
