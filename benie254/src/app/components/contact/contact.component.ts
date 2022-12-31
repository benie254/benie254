import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  name = 'Benson Langat';
  email = 'fullstack.benie@gmail.com';
  address = 'Nyayo Highrise, Mbagathi';
  city = 'Nairobi, Kenya';
  values = '';
  noInput: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  contact(data){
    Notiflix.Notify.success("Message Sent!")
  }
  onKey(event: any){
    this.values = event.target.value;
    if(this.values){
      this.noInput = false;
    }
  }

}
