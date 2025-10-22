import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-plans-section',
  imports: [
    NgClass
  ],
  templateUrl: './plans-section.html',
  styleUrl: './plans-section.css'
})
export class PlansSection {
// Controla qual plano está selecionado
  selectedPlan: 'monthly' | 'single' = 'monthly';

  // Função para trocar o plano
  selectPlan(plan: 'monthly' | 'single') {
    this.selectedPlan = plan;
  }
}
