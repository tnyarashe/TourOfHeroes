import {Component , OnInit} from '@angular/core';
import {Hero} from "../app.hero";
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    
  }

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
}
