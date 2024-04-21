import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dwa',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './dwa.component.html',
  styleUrl: './dwa.component.css'
})
export class DwaComponent {

  vanish = false;

  size:string = "100px";
  align = "left";

  //style = "float: left; height: 100px; ";


  vanishh()
  {
    this.vanish = !this.vanish;
  }

  setvalues()
  {

  }


  left()
  {
    this.align = "left";
    this.setvalues();
  }

  right()
  {
    this.align = "right";
    this.setvalues();
  }

  middle()
  {
    this.align = "center";
    this.setvalues();
  }

  small()
  {
    this.size = "125px";
    this.setvalues();
  }

  big()
  {
    this.size = "700px";
    this.setvalues();
  }

  medium()
  {
    this.size = "250px";
    this.setvalues();
    //alert('medium');
  }

}
