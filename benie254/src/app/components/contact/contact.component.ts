import { Component, OnInit } from '@angular/core';

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
    
  }
  onKey(event: any){
    this.values = event.target.value;
    if(this.values){
      this.noInput = false;
    }
  }

}
