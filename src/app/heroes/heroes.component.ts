import { Component } from '@angular/core';
import { TitleCasePipe, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [TitleCasePipe, NgIf, NgFor, FormsModule]
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}