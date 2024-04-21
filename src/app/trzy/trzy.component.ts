import { Component } from '@angular/core';
import { GetipService } from '../getip.service';


@Component({
  selector: 'app-trzy',
  standalone: true,
  imports: [],
  templateUrl: './trzy.component.html',
  styleUrl: './trzy.component.css'
})
export class TrzyComponent {
  trzy = 'ładowanie...';

  constructor(private getip: GetipService) { }

  ngOnInit() {
    this.trzy = this.getip.getip();
  }
  
}
