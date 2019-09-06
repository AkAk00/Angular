import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { fakeClients } from './fake-clients';
@Injectable({
 providedIn: 'root'
})
export class ClientsService {
 private pCollection: Client[];
 constructor() {
   this.collection = fakeClients;  }
   // get collection
 get collection(): Client[] {
   return this.pCollection;
 }  // set collection
 set collection(col: Client[]) {
   this.pCollection = col;
 }  // update item in collection
 public update(item, state) {
   console.log(item);
   item.state = state;
   console.log(item);
 }  // add item in collection
 public add(item: Client) {
   this.collection.push(item);
 }  // get item by id in collection
}

