import { Component } from '@angular/core';
import { TitleCasePipe, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";

import { HeroService } from '../services/hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [NgFor, FormsModule, HeroDetailComponent]
})
export class HeroesComponent {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}