import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  constructor() { }

  add(productItem: any) {
    this.items.push(productItem);
  }

  remove(cart: any) {
    this.items = this.items.filter(item => item.id !== cart)
  }

  total() {
    return this.items.reduce((total, items) => total + items.price, 0)
  }

  list() {
    return this.items;
  }
}
