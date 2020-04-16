import { Component } from '@angular/core';
import * as moment from 'moment';

// Siete delle merde

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  beforeBST = moment.unix(1585396800000);

  duringBST = moment.unix(1585476000000);


}
