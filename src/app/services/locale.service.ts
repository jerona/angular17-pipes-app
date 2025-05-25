import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es'|'fr'|'en';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private currentLocale = signal<AvailableLocale>('es');
  
  constructor() { 
    this.currentLocale.set(
      localStorage.getItem('locale') as AvailableLocale ?? 'es'
    );
  }

  getCurrentLocale = () => this.currentLocale;

  changeLocale = (locale: AvailableLocale) => {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    // para que se pueda cambiar de idioma (locale) de forma dinamica 
    // al darle al botón se requiere de recargar la aplicación 
    // por lo que guardamos los últimos valores que teníamos en el servicio
    // mediante el uso del localstorage y recargamos con reload()
    // otra alternativa es utilizar el paquete ngx-translate 
    // (pero esto cargaría más de un idioma en la aplicación podría tener un costo)
    // en la recarga se recupera el local de este servicio llamandose desde
    // el appConfig.js.
    window.location.reload();
  }
}
