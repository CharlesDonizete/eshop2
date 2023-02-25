import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Add } from 'src/app/actions/cart.action';
import { DataService } from 'src/app/data.service';
import { CartModel } from 'src/app/models/cart.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: any[] = null;

  constructor(
    private store: Store<CartModel>,
    private toastCtrl: ToastController,
    private sevice: DataService
  ) {}

  ngOnInit() {
    this.sevice.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  async add(product) {
    this.store.dispatch(Add(product));
    const toast = await this.toastCtrl.create({
      message: `${product.title} adicionado ao carrinho`,
      duration: 2000,
      showCloseButton: true,
      closeButtonText: 'OK',
    });
    toast.present();
  }
}
