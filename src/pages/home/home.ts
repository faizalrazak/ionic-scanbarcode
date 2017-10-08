import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderDetailPage } from '../order-detail/order-detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II'
  ];

  constructor(public navCtrl: NavController, public navParams:NavParams) {

  }

  orderDetail(item){
    this.navCtrl.push(OrderDetailPage, {item:item})
  }

}
