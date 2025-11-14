import { Component } from '@angular/core';

@Component({
  selector: 'app-depoiments',
  imports: [],
  templateUrl: './depoiments.html',
  styleUrl: './depoiments.css',
})
export class Depoiments {

  depoiment = [
    {
      nomeCliente: "Lucas Gonzales",
      funcaoEmpresa: "Educador, Senai/FIAP",
      depoimento: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      foto: "assets/pictures/user1.png"
    },
    {
      nomeCliente: "Gustavo de Freitas",
      funcaoEmpresa: "CEO, NewPower",
      depoimento: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      foto: "assets/pictures/user2.png"
    },
    {
      nomeCliente: "Jansen Killinger",
      funcaoEmpresa: "Educador, Senai",
      depoimento: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      foto: "assets/pictures/user3.png"
    },
    {
      nomeCliente: "Claudio",
      funcaoEmpresa: "CEO, Braziflon",
      depoimento: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      foto: "assets/pictures/user4.png"
    },
    {
      nomeCliente: "Rafael Moreira",
      funcaoEmpresa: "Colaborador, NewPower",
      depoimento: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      foto: "assets/pictures/user5.png"
    },
    {
      nomeCliente: "Bruna",
      funcaoEmpresa: "Colaboradora, Braziflon",
      depoimento: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      foto: "assets/pictures/user6.png"
    },
  ];
  
}
