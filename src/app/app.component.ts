import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoremComponent } from './lorem/lorem.component';
import { DwaComponent } from './dwa/dwa.component';
import { TrzyComponent } from './trzy/trzy.component';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoremComponent, DwaComponent, TrzyComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lbprjkt';
}
