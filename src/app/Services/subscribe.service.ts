import { Injectable } from '@angular/core';

@Injectable()
export class SubscribeService {
  OnSubscribeClicked(type: string) {
    alert(
      'You are successfully subscribed to ' +
        type +
        ' package. Now you can enjoy our services'
    );
  }
}
