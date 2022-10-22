import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Heel } from './heel-list/Heel';

/**
 * Maneja la lógica del carrito
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class HeelCartService {

  private _cartList : Heel[] = [];
  cartList: BehaviorSubject<Heel[]> = new BehaviorSubject(this._cartList); // this._cartList === [], no vincula directamente,
                                                                          // sino que se inicializa que emitirá una notificacion de algo de tipo Heel[]

  constructor() { }

  addToCart(heel: Heel) {
    let item = this._cartList.find((v1) => v1.name == heel.name);
    if(!item){
      this._cartList.push({ ... heel});
    } else {
      item.quantity += heel.quantity;
    }
  
    console.log(this._cartList.length);
    this.cartList.next(this._cartList); // equivalente al emitt de eventos
  }

}
