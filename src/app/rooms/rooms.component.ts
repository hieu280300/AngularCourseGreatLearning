import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  
  
  
  hotelName = "Hilton Hotel";
   numberOfRooms =10;
   hiddenRooms =false;
   value = "";
  constructor() { }
  
  ngOnInit(): void {
  }
  toggle()
  {
    this.hiddenRooms = !this.hiddenRooms;
  }
  clearValue()
  {
    this.value="xin chao cac ban";
  }
}
