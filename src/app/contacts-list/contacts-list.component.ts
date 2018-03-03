import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';
import { NgForOf } from '@angular/common';
import { NgIf } from '@angular/common';
//import { EventEmitter } from 'events';


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  

  @Input() contacts: Contact[];

  @Output() transitRowData: EventEmitter<Contact> = new EventEmitter<Contact>()

  constructor() { }

  ngOnInit() {
  }

  onRowClick(contact: Contact){
    this.transitRowData.emit(contact);
  }
}
