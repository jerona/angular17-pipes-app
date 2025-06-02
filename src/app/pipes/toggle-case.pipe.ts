//apipe -> snippet jhon papa
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase' // 'joel' | toggleCase
})

export class ToggleCasePipe implements PipeTransform {
    // se ejecuta cada vez que cambie nuestros datas 
    // asociados a nuestro pipe
    transform(value:  string, upper: boolean): string {
        const valueTransform =  
            upper
            ?   value.toUpperCase()
            :   value.toLowerCase(); 
        return valueTransform;
    }
}