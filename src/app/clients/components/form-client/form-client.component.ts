import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  public states = StateClient;
  public form: FormGroup;
  private clt = new Client();
  @Output() doItem: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.form = this.fb.group({
      name : [this.clt.name],
      email : [this.clt.email,
              Validators.email
              ],
      state : [this.clt.state]
    });
  }
  onSubmit() {
    this.doItem.emit(this.form.value);

  }
}
