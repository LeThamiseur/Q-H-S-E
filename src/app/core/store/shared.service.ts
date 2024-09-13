import { Injectable, signal } from '@angular/core';

export class InterfaceSituationD{
  situationId!: string;
  viewMode! : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  situationDStore = signal<InterfaceSituationD|null>(null);


}
