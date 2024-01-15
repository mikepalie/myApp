import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { IMovie } from './models';
import { movies } from './movieMockup'
import { compileNgModule } from '@angular/compiler';
import { log } from 'console';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit,OnChanges,OnDestroy{
  Movies: IMovie[];
  FilteredMovies!: IMovie[];
  SearchTitle!: string;
  ShowPrice: boolean = true;
  BorderRadius: number = 0;


  constructor() {
    console.log("Eimai i movies Constructor");
    this.Movies = movies;
    this.FilteredMovies = this.Movies;
  }
  ngOnDestroy(): void {
    console.log("Eimai i movies onDestroy");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Eimai i movies onChanges");
  }
  ngOnInit(): void {
    console.log("Eimai i movies onInit");
  }

  FilterMovies() {
    this.FilteredMovies = this.Movies.filter(x => x.title.toUpperCase().includes(this.SearchTitle.toUpperCase()));
  }

  TogglePrice() {
    this.ShowPrice = !this.ShowPrice;
    console.log(170 / 20);
  }

  



}
