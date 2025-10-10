import { Component } from '@angular/core';

@Component({
  selector: 'app-flow-section',
  imports: [],
  templateUrl: './flow-section.html',
  styleUrl: './flow-section.css'
})
export class FlowSection {
  cardsData = [
    {
      indicator: "Elicitação",
      title: "Do conceito á clareza, sem atrito.",
      dotOne: "Levantar objetivos do sistema.",
      dotTwo: "Levantar necessidades dos usuários.",
      colorFocus: "#2D9CFF"
    },

    {
      indicator: "Design",
      title: "Design que encanta você e o usuário.",
      dotOne: "Criar interfaces intuitivas.",
      dotTwo: "Valorizar a sua experiência  e do usuário.",
      colorFocus: "#AC24FF"
    },

    {
      indicator: "Desenvolvimento",
      title: "Hora de passar para o código.",
      dotOne: "Construir funcionalidades.",
      dotTwo: "Implementar funcionalidades do projeto.",
      colorFocus: "#FF6A3D"
    },

    {
      indicator: "Suporte",
      title: "Acompanhamento do seu sistema.",
      dotOne: "Evitar problemas.",
      dotTwo: "Previsão de riscos e manutenções constantes.",
      colorFocus: "#F99F0D"
    }
  ]
}
