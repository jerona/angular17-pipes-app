import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Registar local ESPAÑOL (es)
import localeESP from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeESP, 'es');
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
        useValue: 'es'
      }
      //-
    ]
};
