import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  searchText: string = '';

  @ViewChild('product-list') productListComponent: ProductListComponent;

  setSearchtext(value: string) {
    this.searchText = value;
  }
  //////////////////// directive example//////////////
  // ------------ngFor example 2----------------
  // listOfString: string[] = ['Vishwas', 'Rock', 'Kali', 'JohnCena'];
  // ------------ngFor example 2----------------
  // ////////////////////////////////////////////////
  // name: string = 'iPhone 15';
  // price: number = 999;
  // color: string = 'Red';
  // discount: number = 740;
  // name = 'Vishwas';
  ////////////////----------------------------------///////////////////////////
  // pHolder = 'Enter your name';
  // addToCart: number = 0;
  // showDec = true;
  // product = {
  //   name: 'iPhone 15',
  //   price: 999,
  //   color: 'Red',
  //   discount: 9.2,
  //   inStock: 5,
  //   i15Image: '/assets/images/iphone15.jpg',
  //   getFinalPrice() {
  //     return this.price - (this.price * this.discount) / 100;
  //   },
  // };
  ////////////////----------------------------------///////////////////////////
  // onNameChange(event: any) {
  //   // console.log(event.target.value);
  //   this.name = event.target.value;
  // }
  /////////////////event binding//////////////////////////
  // cartDec() {
  //   if (this.addToCart > 0) {
  //     this.addToCart--;
  //   }
  // }
  // cartInc() {
  //   if (this.addToCart < this.product.inStock) {
  //     this.addToCart++;
  //   }
  // }
  /////////////////event binding//////////////////////////
}
