import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})

export class ListClientComponent implements OnInit {

  public collection: Client[];

  public headers = [
    'Name',
    'Email',
    'State',

  ]

  constructor(private clientService: ClientsService) { }

  ngOnInit() {
    this.collection = this.clientService.collection;
  }

  changeState(arg) {
    this.clientService.update(arg.obj, arg.state);
  }
}
