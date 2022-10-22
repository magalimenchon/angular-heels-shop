import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Heel } from './heel-list/Heel';

const URL = 'https://635461e6ccce2f8c0207f7f7.mockapi.io/heels';

@Injectable({
  providedIn: 'root'
})
export class HeelDataService {

  constructor(private http: HttpClient) { }

  /**
   * Consume la API de heels
   * @returns observable de la respuesta.
   */
  public getAll(): Observable<Heel[]> {
    //fetch('url', {method: 'GET'}).then
    return this.http.get<Heel[]>(URL)
    //pipe permite hacer cosas en el medio antes de enviar los cambios a los que se estan subscriptos;
    //  devuelve otro observable. ... Pensarlo como que el pipe se ejecuta antes del subscribe.
    //tap transforma el objeto antes de emitirlo.
              .pipe(
                tap( (heelsMockFromObservable: Heel[]) => /*console.log(heelsMockFromObservable)*/
                                                          heelsMockFromObservable.forEach(heel => heel.quantity = 0))
              );
    //consumir la api rest

  }
  //heel.quantity = 0;
}
