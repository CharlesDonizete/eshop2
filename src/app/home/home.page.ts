import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartModel } from '../models/cart.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cart$: Observable<CartModel>;
  constructor(
    private store: Store<CartModel>,
    private alertCtrl: AlertController
  ) {
    this.cart$ = store.pipe(select('cart'));
  }
}
