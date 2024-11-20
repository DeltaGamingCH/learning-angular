import { Component } from '@angular/core';
import { TitleCasePipe, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [NgFor, FormsModule, HeroDetailComponent]
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}