//apipe -> snippet jhon papa
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
    // se ejecuta cada vez que cambie nuestros datas 
    // asociados a nuestro pipe
    transform(canFly: boolean): string {
        const valueTransform =  
            canFly
            ?   'Puede Volar'
            :   'No Puede Volar'; 
        return valueTransform;
    }
}