import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakeCollection } from './fake-collection';

@Injectable({
  providedIn: 'root'
})

export class PrestationsService {
  private pCollection: Prestation[];
  constructor() {
    this.collection = fakeCollection;
  }

  // get/set collection
  get collection(): Prestation[]{
    return this.pCollection;
  }

  set collection(col: Prestation[]) {
    this.pCollection = col;
  }


  // update item in collection
  public update(item, state) {

    item.state = state;

  }

  // add item in collection
  // get item by id in collection

}
