import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit, OnChanges, OnDestroy {

  @Input() RatingNumber!: number;

  constructor() {
    console.log("Eimai RATING CONSTRUCTOR");
  }

  starWidth!:number;

 // pinakas!: any[];

  ngOnDestroy(): void {
    console.log("Eimai RATING ONDESTROY");
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("Eimai RATING ONCHANGES");
    // console.log(this.RatingNumber);

    // this.pinakas = new Array(Math.floor(this.RatingNumber));

    this.starWidth = this.RatingNumber * 150/10;

  }
  
  ngOnInit(): void {
    console.log("Eimai RATING ONINIT");
  }

}
