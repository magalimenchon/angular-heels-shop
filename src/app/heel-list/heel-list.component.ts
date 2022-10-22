import { Component, OnInit } from '@angular/core';
import { HeelCartService } from '../heel-cart.service';
import { HeelDataService } from '../heel-data.service';
import { Heel } from './Heel';

@Component({
  selector: 'app-heel-list',
  templateUrl: './heel-list.component.html',
  styleUrls: ['./heel-list.component.scss']
})
export class HeelListComponent implements OnInit {

  heels: Heel[] = [];

  constructor(
    private cartService: HeelCartService,
    private heelsDataService: HeelDataService) { 
  }

  ngOnInit(): void {
    this.heelsDataService.getAll()
    //.subscribe(data => );
    .subscribe(heelsFromMockDataService => this.heels = heelsFromMockDataService); 
    //mi arreglo de heels se convierte en el que viene del servicio (API)

  }

  addToCart(heel: Heel): void{
    this.cartService.addToCart(heel);
    heel.stock -= heel.quantity;
    heel.quantity = 0;
  }

  /**
   * EL EVENT ES DEL MAX ASOCIADO DE input-integer-component
   */
  maxReached(message: string): void{
    alert(message);
  }

}
