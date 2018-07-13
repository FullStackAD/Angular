import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  hero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) {
    this.hero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
