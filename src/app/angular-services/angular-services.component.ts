import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'angular-services',
  templateUrl: './angular-services.component.html',
  styleUrls: ['./angular-services.component.css'],

  //------------// Dependency hierarchical from parent to  child component in root level //---------------//

  providers: [SubscribeService],

  //------------// Dependency hierarchical from parent to  child component  in root level//---------------//
})
export class AngularServicesComponent {}
