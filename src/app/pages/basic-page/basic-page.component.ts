import { CommonModule, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [
    // CommonModule,  
    // si agregas CommonModule no hace falta
    // agregar los 3 importssiguientes ya que viene incluido.
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent { 
  nameLower = signal<string>('joel');
  nameUpper = signal<string>('JOEL');
  fullName = signal<string>('jOeL aLBErto');

  customDate = signal<Date>(new Date());

  tickingDateEffect = effect ((onCleanup) => {
    const interval = setInterval(()=> {
      this.customDate.set(new Date());
      console.log('$update');
    }, 1000);
    
    // si no aplicamos el cambio aunque cambiemos de pestaña va a seguir ejecutando 
    // y mostrando en la consola por ello hacemos el clean. 
    onCleanup(()=> {
      clearInterval(interval);
    })
  });
}
