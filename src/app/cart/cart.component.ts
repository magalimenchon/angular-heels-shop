import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HeelCartService } from '../heel-cart.service';
import { Heel } from '../heel-list/Heel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  //cartList: Heel[] = [];
  cartList$!: Observable<Heel[]>;

  constructor(private cartService: HeelCartService) { 
    //cartService.cartList.subscribe(cartObservable => this.cartList = cartObservable);
    this.cartList$ = cartService.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
