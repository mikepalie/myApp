import { Component } from '@angular/core';
import {trainers} from './trainerMockupData';
import { ITrainer } from './trainer';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.css'
})
export class TrainerComponent {
  
  Trainers:ITrainer[] = trainers;
  
}
