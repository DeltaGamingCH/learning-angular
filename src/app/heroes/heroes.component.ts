import { Component } from '@angular/core';
import { Hero } from '../hero';
import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [FormsModule, TitleCasePipe]
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  }
}
