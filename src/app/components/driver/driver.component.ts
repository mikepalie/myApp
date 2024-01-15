import { Component } from '@angular/core';
import { drivers } from './driverMockup';
import { Driver } from './driverModel';
import { log } from 'console';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent {

  ToggleInfo() {
    this.isHiddenInfo = !this.isHiddenInfo;
  }

  isHiddenInfo: boolean = true;

  buttonSize: number = 12;

  IncreaseSize() {
    this.buttonSize += 10;
  }

  DecreaseSize() {
    this.buttonSize -= 10;
  }

  Username:string = "Mixalis";

















  Drivers: Driver[] = [];
  Names: string[] = ["Mirella", "Giannis", "Giorgos"];
  a: number = 5;
  b: number = 2;

  isAbleVote: boolean = true;

  PhotoUrl: string = "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg";

  Width: number = 200;
  Titlos: string = "Fotografia diakopon";
  BorderRadius: number = 30;
  FontSize: number = 40;

}
