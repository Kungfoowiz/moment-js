import { Component } from '@angular/core';
import * as moment from 'moment';

// Siete delle merde

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  currentDateTime = new Date();

  currentTime = moment.unix(this.currentDateTime.getTime()/1000);  
  
  beforeBST = moment.unix(1585396800000/1000);

  duringBST = moment.unix(1585476000000/1000);

  convertTime = moment.unix(1587038400000/1000).utc();


}
