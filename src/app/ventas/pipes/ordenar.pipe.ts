import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderPor: string = 'sin valor' ): Heroe[] {
    if(orderPor === 'nombre') {
      heroes = heroes.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1)
    } else if(orderPor === 'vuela') {
      heroes = heroes.sort((a,b) => (a.vuela) ? 1 : -1)
    } else if(orderPor === 'color'){
      heroes = heroes.sort((a,b) => (a.color > b.color) ? 1 : -1)
    }

    return heroes
  }

}
