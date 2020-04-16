import { Component } from '@angular/core';
import Moment from 'moment';

// Siete delle merde

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  myDate = Moment.unix(1318781876);

}
