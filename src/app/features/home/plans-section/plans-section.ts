import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {PlansCards} from '../../../shared/components/plans-cards/plans-cards';
import {PlansCardsSingle} from '../../../shared/components/plans-cards-single/plans-cards-single';

@Component({
  selector: 'app-plans-section',
  imports: [
    NgClass,
    PlansCards,
    PlansCardsSingle
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
