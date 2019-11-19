import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import  { Map } from "../../Models/Map";
import { Player } from "../../Models/Player";
import { Router } from '@angular/router';
import { UsersService } from '../../Services/users.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private userService: UsersService, private router:Router) {

  }

  ngOnInit() {
  }
  // connect(){
  //   this.userService.connect();
  // }
  //
  // disconnect(){
  //   this.userService._disconnect();
  // }
  //
  // sendMessage(){
  //   this.webSocketAPI._send(this.name);
  // }
  //
  // handleMessage(message){
  //   this.greeting = message;
  // }
}
