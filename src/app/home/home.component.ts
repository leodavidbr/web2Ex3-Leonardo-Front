import { VERSION } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  clicked = false;
  title = `Angular ${VERSION.full}`

  handleClick() {
    this.clicked = true;
  }
}
