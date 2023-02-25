import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartModel } from 'src/app/models/cart.model';
import { cartReducer } from 'src/app/reducers/cart.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cart$: Observable<CartModel>;

  constructor(private store: Store<CartModel>) {
    this.cart$ = store.pipe(select('cart'));

    this.cart$.subscribe((resp) => {
      console.log(resp);
    });
  }

  ngOnInit() {}
}
