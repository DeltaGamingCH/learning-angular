import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HeroesComponent } from "./heroes/heroes.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeroesComponent]
})

export class AppComponent {
  title = 'Tour of Heroes';
}