import { Component, OnInit } from '@angular/core';
import { MapComponent} from './Components/map/map.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{


  title = 'Risk';
  nbOfPlayer= 5;

  ngOnInit() {
    console.log('title: ', this.title)
   // new MapComponent();
   // new MapComponent(this.title,this.nbOfPlayer);
  }
}
