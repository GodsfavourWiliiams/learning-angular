import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  items = this.cartService.getItems();

  checkOutForm = this.formBuilder.group({ name: '', address: '' });

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.log(
      'Your order has been submitted' + JSON.stringify(this.checkOutForm.value)
    );
    this.checkOutForm.reset();
  }
}
