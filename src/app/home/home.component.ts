import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {
  isClicked:boolean = false;
  toggleMenu(){
this.isClicked=!this.isClicked;
  }
}
