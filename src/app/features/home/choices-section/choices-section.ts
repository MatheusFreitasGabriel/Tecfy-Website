import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-choices-section',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './choices-section.html',
  styleUrl: './choices-section.css'
})
export class ChoicesSection {
  // No seu arquivo TypeScript/JavaScript

// Array de Itens Negativos (Lado Esquerdo da DNA)
  negativeItens = [
    'Suporte limitado (apenas em horário comercial)',
    'Custos ocultos e planos inflexíveis',
    'Falta de personalização, soluções genéricas',
    'Atrasos frequentes na entrega',
    'Dificuldade em escalar junto com o crescimento'
  ];

// Array de Itens Positivos (Lado Direito da DNA)
  positiveItens = [
    'Suporte 24 horas em todos os sistemas',
    'Planos mensais acessíveis e transparentes',
    'Personalização total conforme sua necessidade',
    'Agilidade na entrega e manutenção',
    'Escalabilidade garantida para crescimento do negócio'
  ];
}
