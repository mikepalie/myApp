import { Component, OnInit } from '@angular/core';
import { NobelService } from './nobel.service'
import { Prize } from './models';

@Component({
  selector: 'app-nobel',
  templateUrl: './nobel.component.html',
  styleUrl: './nobel.component.css'
})
export class NobelComponent {


  //Properties
  Prizes!: Prize[];
  Categories!: string[];
  SearchCategory!: string;
  FilteredPrizes!: Prize[];
  //MyMethods
  FilterRecords() {
    this.FilteredPrizes = this.Prizes.filter(x => x.category.includes(this.SearchCategory));
  }

  //Constructor
  constructor(private NobelService: NobelService) {

  }
  HasError: boolean = false;
  //Hooks
  ngOnInit(): void {
    this.NobelService.getNobel().subscribe(
      data => {
        this.Prizes = data.prizes;
        this.FilteredPrizes = this.Prizes;
        this.HasError = false;
      },          //OnSuccess
      error => this.HasError = true,              //OnError
      () => this.Categories = [...new Set(this.Prizes.map(x => x.category))],   //OnComplete
    );
  }




}
