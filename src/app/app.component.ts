import { Component } from '@angular/core';
import { BusinessCardComponent } from "./business-card/business-card.component";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [BusinessCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'business-card';
}
