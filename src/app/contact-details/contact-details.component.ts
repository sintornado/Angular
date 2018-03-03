import { Component, OnInit, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Contact } from '../models/contact';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor() { }
  

  @Input() contact: Contact
  @Input() show: boolean

  ngOnInit() {
  }

}
