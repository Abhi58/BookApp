

import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';
import { Router } from '@angular/router';



 @Component({
      selector: 'app-heroes',
      templateUrl: './heroes.component.html',
      styleUrls: ['./heroes.component.css'],


    providers: [HeroService]
    })
    export class HeroesComponent implements OnInit {

      heroes: Hero[];
      selectedHero: Hero;
      addValue=false;
      showless=false;
      showmore=false;

      hero: Hero;

      constructor(private heroService: HeroService, private router: Router) { }

      ngOnInit(): void {
        this.getHeroes();

      }

      gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);


      }

      showLess(){
       this.showless=true;
       this.showmore=true;
      }

      showMore(){
        this.showmore=false;
        this.showless=false;
      }


      onSelect(hero: Hero): void {
        this.selectedHero = hero;
      }

      getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
      }

      add(name: string,author:string,isbn:number,publicationdate:string,publisher:string
      ,price:number,genre:string,format:string): void {

        this.hero=new Hero(name,author,isbn,publicationdate,publisher,price,genre,format);
        if (!this.hero) { return; }
        this.heroService.create(this.hero)
          .then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
            this.addValue=false;

          });

      }

      delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
              this.heroes = this.heroes.filter(h => h !== hero);
              if (this.selectedHero === hero) { this.selectedHero = null; }
            });
      }

      addHero(){
        this.addValue=true;
      }

    }



