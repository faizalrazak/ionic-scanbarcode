import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer'

/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

	orderDetail:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');
    this.orderDetail = this.navParams.get('item');
  	console.log(this.orderDetail)
  }

  sendEmail(){
  	this.emailComposer.isAvailable().then((available: boolean) =>{
		 if(available) {
		   //Now we know we can send
		 }
		});

		let email = {
		  to: 'mohamadfaizalrazak@gmail.com',
		  cc: 'mohamadfaizalrazak@gmail.com',
		  bcc: ['mohamadfaizalrazak@gmail.com', 'mohamadfaizalrazak@gmail.com'],
		  attachments: [
		    'file://img/logo.png',
		    'res://icon.png',
		    'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
		    'file://README.pdf'
		  ],
		  subject: 'Cordova Icons',
		  body: 'How are you? Nice greetings from Leipzig',
		  isHtml: true
		};

		// Send a text message using default options
		this.emailComposer.open(email);

  }

}
