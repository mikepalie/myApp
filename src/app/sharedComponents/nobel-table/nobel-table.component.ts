import { Component, Input } from '@angular/core';
import { Prize } from '../../components/nobel/models';

@Component({
  selector: 'app-nobel-table',
  templateUrl: './nobel-table.component.html',
  styleUrl: './nobel-table.component.css'
})
export class NobelTableComponent {

  @Input()  Prizes!:Prize[];

}
