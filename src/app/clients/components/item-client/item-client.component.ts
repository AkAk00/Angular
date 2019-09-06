import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {
  public states = StateClient;
  @Input() item: Client;
  @Output() doChange: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  public changeState(arg, item) {

    this.doChange.emit({obj: item, state : arg.target.value});
  }

}
