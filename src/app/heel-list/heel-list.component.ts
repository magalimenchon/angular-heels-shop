import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heel-list',
  templateUrl: './heel-list.component.html',
  styleUrls: ['./heel-list.component.scss']
})
export class HeelListComponent implements OnInit {

  heel = {
    "name": "COSMOPOLE HIGH BOOTS",
    "type": "BOOTS",
    "price":"$90.000",
    "stock":"1",
    "image":"assets/images/1.jpg",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
