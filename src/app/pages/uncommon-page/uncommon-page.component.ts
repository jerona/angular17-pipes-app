import { AsyncPipe, CommonModule, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Joel',
  gender: 'male',
  age: 31,
  address: 'Otawa, Canadá'
};

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 33,
  address: 'Toronto, Canadá'
};

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    AsyncPipe
],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export default class UncommonPageComponent { 
  client = signal(client1);

  // empleado en el pipe i18nSelectPipe
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient = () => {
    const clientAssigned = 
      this.client() === client1
      ? client2
      : client1;
      this.client.set(clientAssigned)
  }
  //-

  // i18nPluralPipe
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  })

  clients = signal([
    'Paco',
    'Pedro',
    'Javier',
    'Joel',
    'Juan'
  ]);

  deleteClient = () => {
    this.clients.update((prev) => prev.slice(1));
  }
  //-

  // KeyValuePipe
  profile = {
    name: 'Joel A.',
    age: 39,
    address: 'Desconocido'
  }
  //-

  // AsyncPipe (1º Promise luego observable)
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      // reject('Error en la promesa');
      console.log('Promesa finalizada');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value)=> console.log('tap',value))
  )
}
