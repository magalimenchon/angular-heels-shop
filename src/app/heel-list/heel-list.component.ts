import { Component, OnInit } from '@angular/core';
import { Heel } from './Heel';

@Component({
  selector: 'app-heel-list',
  templateUrl: './heel-list.component.html',
  styleUrls: ['./heel-list.component.scss']
})
export class HeelListComponent implements OnInit {

  heels: Heel[] = [
    {
      name: 'COSMOPOLE HIGH BOOTS',
      type: 'BOOTS',
      price: 90000,
      stock: 1,
      image:'assets/images/1.jpg',
      clearence: true,
      quantity: 0,
    },
    {
      name: 'COSMOPOLE SUEDE ANKLE BOOTS MOCA OPEN TOES',
      type: 'BOOTS',
      price: 85000,
      stock: 8,
      image:'assets/images/2.jpg',
      clearence: false,
      quantity: 0,
    },
    {
      name: 'COSMOPOLE SUEDE SANDALS WITH CLIP LIGHT BROWN',
      type: 'SANDALS',
      price: 70000,
      stock: 5,
      image:'assets/images/3.jpg',
      clearence: false,
      quantity: 0,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(heel: Heel): void {
    if(heel.quantity < heel.stock)
      heel.quantity++;
  }

  downQuantity(heel: Heel): void {
    if(heel.quantity > 0)
      heel.quantity--;
  }

  changeQuantity(event: KeyboardEvent, heel: Heel): void{
    console.log(event.keyCode);
    if(event.keyCode < 48 || event.keyCode > 57){
      event.preventDefault();
    }
  }

}
