import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Registar local ESPAÑOL (es)
import localeESP from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';
import { LocaleService } from './services/locale.service';

// Cargamos los locales que se vayan a utilizar
// el ingles no hace falta ya que esta por defecto
// en el angular (lenguaje creado en inglés).
registerLocaleData(localeESP, 'es');
registerLocaleData(localeFr, 'fr');
//-

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(
      { eventCoalescing: true 
      }
      ), 
      provideRouter(routes),


      // Agregar Idioma español (es) en PIPES de fechas.
      // Agrega en Pipes numerico por defecto es (separación con . en vez de , del inglés)
      // monday -> lunes
      {
        provide: LOCALE_ID,
        // useValue: 'es', 

        // queremos cambiar el idioma desde la aplicación por lo que 
        // la propiedad useValue estará comentada
        // en este punto no tenemos acceso a los servicios inyectados
        // por lo que del siguiente modo lo implementamos.
        deps: [LocaleService],
        useFactory: (localService: LocaleService) => localService.getCurrentLocale()()
      }
      //-
    ]
};
