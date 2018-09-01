import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-jadualdan-subjek',
  templateUrl: 'jadualdan-subjek.html',
})
export class JadualdanSubjekPage {
  jadualdansubjek: Observable<any>;

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.jadualdansubjek = this.httpClient.get('http://localhost/phpmyadmin/sql.php?db=e-attendance&table=jadual&pos=0');
    this.jadualdansubjek
    .subscribe(data => {
      console.log('my data: ', data);

    }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JadualdanSubjekPage');
  }

}
// 