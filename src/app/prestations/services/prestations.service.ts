import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakeCollection } from './fake.collections';

@Injectable({
 providedIn: 'root'
})
export class PrestationsService {
 private pCollection: Prestation[];
 constructor() {
   this.collection = fakeCollection;
 }  // get collection
 get collection(): Prestation[] {
   return this.pCollection;
 }  // set collection
 set collection(col: Prestation[]) {
   this.pCollection = col;
 }
// update item in collection
public update(item, state) {
  console.log(item);
  item.state = state;
  console.log(item);
}
// add item in collection
// get item by id in collection
}

