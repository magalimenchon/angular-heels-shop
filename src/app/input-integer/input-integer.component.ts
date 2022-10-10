import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  static MESSAGE_MAX: string = "Se alcanzó el máximo: ";

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  /**
   * EVENTO SOLO DE SALIDA CUANDO LA CANTIDAD ALCANZÓ EL MAXIMO
   */
  @Output() 
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } 
    else
      this.maxReached.emit(InputIntegerComponent.MESSAGE_MAX + this.max);
  }

  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: KeyboardEvent): void{
    console.log(event.keyCode);
    if(event.keyCode < 48 || event.keyCode > 57){
      event.preventDefault();
      this.quantityChange.emit(this.quantity);
    }
  }
}
