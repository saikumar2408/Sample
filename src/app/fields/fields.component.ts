import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {

  @Input() fields;
  @Input() selectedDiv;
  constructor() { }

  ngOnInit(): void {
    console.log('fields', this.fields);
  }

}
