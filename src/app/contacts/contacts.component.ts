import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
    constructor() { }

    show: boolean = false;
    currentContact: Contact ;
    contacts: Contact[] = [new Contact("Semen", "Ivanov", "qwerty@gmail.com", 45353535),
                          new Contact("Vasiliy", "Petrov", "qwerty@gmail.com", 4353453453),
                          new Contact("Pete", "Petrov", "qwerty@gmail.com", 4353453453),
                          new Contact("Alesha", "Petrov", "qwerty@gmail.com", 4353453453),
                          new Contact("Kiril", "Petrov", "qwerty@gmail.com", 4353453453)]

  ngOnInit() {
  }

  showDetails(contact){
    this.show = true;
    debugger;
    this.currentContact = contact;
  }

}