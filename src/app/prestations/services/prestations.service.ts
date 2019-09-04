import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakeCollection } from './fake.collections';

 /* Marking a class with @Injectable ensures that the compiler will generate the necessary metadata
                  to create the class's dependencies when the class is injected*/
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
}
// update item in collection

// add item in collection

// get item by id in collection


