import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewEncapsulationComponent {}
