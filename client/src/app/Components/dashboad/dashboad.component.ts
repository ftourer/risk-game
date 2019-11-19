import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import  { Map } from "../../Models/Map";
import { Player } from "../../Models/Player";
import { Router } from '@angular/router';
import { UsersService } from '../../Services/users.service';


@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {
  private id
  show:boolean = false;
  initForm = new FormGroup({
    username: new FormControl(''),
    player_color: new FormControl(''),
    participant: new FormControl(''),

  });
  constructor( private  userService: UsersService, private router : Router) { }

  ngOnInit() {
  }
  onSubmit() {

  }
  connect(){

  }

  initGame() {
    this.userService.initGame();
  }

  disconnect(){
    this.userService.disconnect();
  }

  // sendMessage(){
  //   this.webSocketAPI._send(this.name);
  // }



}
