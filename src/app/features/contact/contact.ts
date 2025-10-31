import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  planoEscolhido: string = "";

  constructor(private router: Router) {
    this.planoEscolhido = history.state.planoEscolhido;
  }

}
